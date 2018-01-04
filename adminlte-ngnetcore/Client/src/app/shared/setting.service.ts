
import { Injectable } from '@angular/core';

@Injectable()
export class AppSettingService
{
    private pushMenu: any;
    private controlSidebar: any;
    private layout: any;
    private mySkins: any[];

    /**
     * Init
     */
    public Init(): any
    {
        /**
         * AdminLTE Demo Menu
         * ------------------
         * You should not use this file in production.
         * This file is for demo purposes only.
         */
        /**
        * Get access to plugins
        */

        $('[data-toggle="control-sidebar"]').controlSidebar();
        $('[data-toggle="push-menu"]').pushMenu();

        this.pushMenu = $('[data-toggle="push-menu"]').data('lte.pushmenu');
        this.controlSidebar = $('[data-toggle="control-sidebar"]').data('lte.controlsidebar');
        this.layout = $('body').data('lte.layout');

        /**
         * List of all the available skins
         *
         * @type Array
         */
        this.mySkins = [
            'skin-blue',
            'skin-black',
            'skin-red',
            'skin-yellow',
            'skin-purple',
            'skin-green',
            'skin-blue-light',
            'skin-black-light',
            'skin-red-light',
            'skin-yellow-light',
            'skin-purple-light',
            'skin-green-light'
        ];

        // Create the tab button
        const $tabButton = $('<li />', { 'class': 'active' })
            .html(`<a href='#control-sidebar-theme-demo-options-tab' data-toggle='tab'>
                    <i class="fa fa-wrench"></i>
                   </a>`);

        // Add the tab button to the right sidebar tabs
        $('[href="#control-sidebar-home-tab"]')
            .parent()
            .before($tabButton);

        this.SetupTempl();
    }

    /**
     * Get a prestored setting
     *
     * @param String name Name of of the setting
     * @returns String The value of the setting | null
     */
    public GetSetting(name): any
    {
        if (typeof (Storage) !== 'undefined')
        {
            return localStorage.getItem(name);
        } else
        {
            window.alert('Please use a modern browser to properly view this template!');
        }
    }

    /**
     * Store a new settings in the browser
     *
     * @param String name Name of the setting
     * @param String val Value of the setting
     * @returns void
     */
    public Store(name, val): any
    {
        if (typeof (Storage) !== 'undefined')
        {
            localStorage.setItem(name, val);
        } else
        {
            window.alert('Please use a modern browser to properly view this template!');
        }
    }

    /**
     * Toggles layout classes
     *
     * @param String cls the layout class to toggle
     * @returns void
     */
    public ChangeLayout(obj, cls): any
    {
        const that = obj;

        $('body').toggleClass(cls);
        if (that.layout == null)
        {
            that.layout = $('body').data('lte.layout');
        }

        that.layout.fixSidebar();
        if ($('body').hasClass('fixed') && cls === 'fixed')
        {
            that.pushMenu.expandOnHover();
            that.layout.activate();
        }
        that.controlSidebar.fix();
    }

    /**
     * Replaces the old skin with the new skin
     * @param String cls the new skin class
     * @returns Boolean false to prevent link's default action
     */
    public ChangeSkin(obj, cls): any
    {
        const that = obj;

        $.each(that.mySkins, function (i)
        {
            $('body').removeClass(that.mySkins[i]);
        });

        $('body').addClass(cls);
        that.Store('skin', cls);
        return false;
    }

    /**
     * Retrieve default settings and apply them to the template
     *
     * @returns void
     */
    public SetupTempl(): any
    {
        const that = this;
        const tmp = that.GetSetting('skin');
        if (tmp && $.inArray(tmp, that.mySkins))
        {
            that.ChangeSkin(that, tmp);
        }

        // Add the change skin listener
        $('[data-skin]').on('click', function (e)
        {
            if ($(this).hasClass('knob'))
            {
                return;
            }
            e.preventDefault();
            that.ChangeSkin(that, $(this).data('skin'));
        });

        // Add the layout manager
        $('[data-layout]').on('click', function ()
        {
            that.ChangeLayout(that, $(this).data('layout'));
        });

        $('[data-controlsidebar]').on('click', function ()
        {
            that.ChangeLayout(that, $(this).data('controlsidebar'));
            const slide = !that.controlSidebar.options.slide;

            that.controlSidebar.options.slide = slide;
            if (!slide)
            {
                $('.control-sidebar').removeClass('control-sidebar-open');
            }
        });

        $('[data-sidebarskin="toggle"]').on('click', function ()
        {
            const $sidebar = $('.control-sidebar');
            if ($sidebar.hasClass('control-sidebar-dark'))
            {
                $sidebar.removeClass('control-sidebar-dark');
                $sidebar.addClass('control-sidebar-light');
            } else
            {
                $sidebar.removeClass('control-sidebar-light');
                $sidebar.addClass('control-sidebar-dark');
            }
        });

        $('[data-enable="expandOnHover"]').on('click', function ()
        {
            $(this).attr('disabled', 'true');
            that.pushMenu.expandOnHover();
            if (!$('body').hasClass('sidebar-collapse'))
            {
                $('[data-layout="sidebar-collapse"]').click();
            }
        });

        //  Reset options
        if ($('body').hasClass('fixed'))
        {
            $('[data-layout="fixed"]').attr('checked', 'checked');
        }
        if ($('body').hasClass('layout-boxed'))
        {
            $('[data-layout="layout-boxed"]').attr('checked', 'checked');
        }
        if ($('body').hasClass('sidebar-collapse'))
        {
            $('[data-layout="sidebar-collapse"]').attr('checked', 'checked');
        }
    }
}
