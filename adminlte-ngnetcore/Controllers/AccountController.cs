using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using adminlte_ngnetcore.Models;
using adminlte_ngnetcore.Models.AccountViewModels;
using adminlte_ngnetcore.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authentication.WsFederation;
using Microsoft.AspNetCore.Http;
using System.Text.Encodings.Web;

namespace adminlte_ngnetcore.Controllers
{
    [Route("[controller]/[action]")]
    public class AccountController : Controller
    {
        public AccountController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public string AuthenticationType
        {
            get
            {
                return Configuration["Authentication:WsFederation:AuthenticationDefaults:AuthenticationType"];
            }
        }
        public IConfiguration Configuration { get; }

        // GET: /<controller>/
        public async Task<IActionResult> SignIn(string source = "/Account/SignedIn")
        {
            var context = HttpContext;
            // DefaultAuthenticateScheme causes User to be set
            ClaimsPrincipal user = context.User;

            // This is what [Authorize] calls
            // var user = await context.AuthenticateAsync();

            // This is what [Authorize(ActiveAuthenticationSchemes = WsFederationDefaults.AuthenticationScheme)] calls
            // var user = await context.AuthenticateAsync(WsFederationDefaults.AuthenticationScheme);

            // Not authenticated
            if (user == null || !user.Identities.Any(identity => identity.IsAuthenticated))
            {
                // This is what [Authorize] calls
                await context.ChallengeAsync(WsFederationDefaults.AuthenticationScheme,
                    new AuthenticationProperties { RedirectUri = source });

                // This is what [Authorize(ActiveAuthenticationSchemes = WsFederationDefaults.AuthenticationScheme)] calls
                // await context.ChallengeAsync(WsFederationDefaults.AuthenticationScheme);
            }

            return new EmptyResult();
        }

        public async Task<IActionResult> SignedIn()
        {
            var context = HttpContext;
            var user = context.User;

            await WriteHtmlAsync(context.Response, async response =>
            {
                await response.WriteAsync($"<h1>Hello Authenticated User {HtmlEncode(user.Identity.Name)}</h1>");
                await response.WriteAsync("<a class=\"btn btn-default\" href=\"/Account/Forbidden\">Restricted</a>");
                await response.WriteAsync("<a class=\"btn btn-default\" href=\"/Account/SignOut\">Sign Out</a>");
                await response.WriteAsync("<a class=\"btn btn-default\" href=\"/Account/SignOutRemote\">Sign Out Remote</a>");

                await response.WriteAsync("<h2>Claims:</h2>");
                await WriteTableHeader(response, new string[] { "Claim Type", "Value" }, context.User.Claims.Select(c => new string[] { c.Type, c.Value }));
            });
            return new EmptyResult();
        }

        public async Task<IActionResult> SignOut()
        {
            var context = HttpContext;
            await context.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            await WriteHtmlAsync(context.Response, async res =>
            {
                await context.Response.WriteAsync($"<h1>Signed out {HtmlEncode(context.User.Identity.Name)}</h1>");
                await context.Response.WriteAsync("<a class=\"btn btn-link\" href=\"/\">Sign In</a>");
            });
            return new EmptyResult();
        }

        public async Task<IActionResult> SignOutRemote()
        {
            var context = HttpContext;
            // Redirects
            await context.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            await context.SignOutAsync(WsFederationDefaults.AuthenticationScheme, new AuthenticationProperties()
            {
                RedirectUri = "/Account/SignedOut"
            });
            return new EmptyResult();
        }

        public async Task<IActionResult> SignedOut()
        {
            var context = HttpContext;
            await WriteHtmlAsync(context.Response, async res =>
            {
                await res.WriteAsync($"<h1>You have been signed out.</h1>");
                await res.WriteAsync("<a class=\"btn btn-link\" href=\"/\">Sign In</a>");
            });

            return new EmptyResult();
        }

        public async Task<IActionResult> AccessDenied()
        {
            var context = HttpContext;
            await WriteHtmlAsync(context.Response, async res =>
            {
                await context.Response.WriteAsync($"<h1>Access Denied for user {HtmlEncode(context.User.Identity.Name)} to resource '{HtmlEncode(context.Request.Query["ReturnUrl"])}'</h1>");
                await context.Response.WriteAsync("<a class=\"btn btn-link\" href=\"/Account/SignOut\">Sign Out</a>");
            });
            return new EmptyResult();
        }

        public async Task<IActionResult> Forbidden()
        {
            var context = HttpContext;
            await WriteHtmlAsync(context.Response, async res =>
            {
                await context.Response.WriteAsync($"<h1>Access Denied for user {HtmlEncode(context.User.Identity.Name)} to resource '{HtmlEncode(context.Request.Query["ReturnUrl"])}'</h1>");
                await context.Response.WriteAsync("<a class=\"btn btn-link\" href=\"/Account/SignOut\">Sign Out</a>");
            });
            return new EmptyResult();
        }

        private static async Task WriteHtmlAsync(HttpResponse response, Func<HttpResponse, Task> writeContent)
        {
            var bootstrap = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">";

            response.ContentType = "text/html";
            await response.WriteAsync($"<html><head>{bootstrap}</head><body><div class=\"container\">");
            await writeContent(response);
            await response.WriteAsync("</div></body></html>");
        }

        private static async Task WriteTableHeader(HttpResponse response, IEnumerable<string> columns, IEnumerable<IEnumerable<string>> data)
        {
            await response.WriteAsync("<table class=\"table table-condensed\">");
            await response.WriteAsync("<tr>");
            foreach (var column in columns)
            {
                await response.WriteAsync($"<th>{HtmlEncode(column)}</th>");
            }
            await response.WriteAsync("</tr>");
            foreach (var row in data)
            {
                await response.WriteAsync("<tr>");
                foreach (var column in row)
                {
                    await response.WriteAsync($"<td>{HtmlEncode(column)}</td>");
                }
                await response.WriteAsync("</tr>");
            }
            await response.WriteAsync("</table>");
        }

        private static string HtmlEncode(string content)
        {
            return string.IsNullOrEmpty(content) ? string.Empty : HtmlEncoder.Default.Encode(content);
        }
    }
}