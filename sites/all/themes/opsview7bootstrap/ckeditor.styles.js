/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button.
 * The 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */
if(typeof(CKEDITOR) !== 'undefined') {
    CKEDITOR.addStylesSet( 'drupal',
    [
            /* Block Styles */

            // These styles are already available in the "Format" drop-down list, so they are
            // not needed here by default. You may enable them to avoid placing the
            // "Format" drop-down list in the toolbar, maintaining the same features.
            /*
            { name : 'Paragraph'		, element : 'p' },
            { name : 'Heading 1'		, element : 'h1' },
            { name : 'Heading 2'		, element : 'h2' },
            { name : 'Heading 3'		, element : 'h3' },
            { name : 'Heading 4'		, element : 'h4' },
            { name : 'Heading 5'		, element : 'h5' },
            { name : 'Heading 6'		, element : 'h6' },
            { name : 'Preformatted Text', element : 'pre' },
            { name : 'Address'			, element : 'address' },
            */

            { name : 'Blue Title'		, element : 'h3', styles : { 'color' : 'Blue' } },
            { name : 'Red Title'		, element : 'h3', styles : { 'color' : 'Red' } },
            { name : 'Orange'		, element : ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'], styles : { 'color' : '#de5a21' } },
            { name : 'Blue'		, element : ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'], styles : { 'color' : '#4385ff' } },
            { name : 'Purple'		, element : ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'], styles : { 'color' : '#513766' } },
            { name : 'Green'		, element : ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'], styles : { 'color' : '#0f9d58' } },
            { name : 'Bold heading'		, element : ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'], attributes : { 'class' : 'robotoslab-bold' } },
            { name : 'Button primary'		, element : 'a', attributes : { 'class' : 'btn btn-primary' } },

            /* Inline Styles */

            // These are core styles available as toolbar buttons. You may opt enabling
            // some of them in the "Styles" drop-down list, removing them from the toolbar.
            /*
            { name : 'Strong'			, element : 'strong', overrides : 'b' },
            { name : 'Emphasis'			, element : 'em'	, overrides : 'i' },
            { name : 'Underline'		, element : 'u' },
            { name : 'Strikethrough'	, element : 'strike' },
            { name : 'Subscript'		, element : 'sub' },
            { name : 'Superscript'		, element : 'sup' },
            */

            { name : 'Marker: Yellow'	, element : 'span', styles : { 'background-color' : 'Yellow' } },

            { name : 'Computer Code'	, element : 'code' },

            { name : 'Deleted Text'		, element : 'del' },
            { name : 'Inserted Text'	, element : 'ins' },

            { name : 'Cited Work'		, element : 'cite' },
            { name : 'Inline Quotation'	, element : 'q' },
    ]);
}