<?php

/**
 * @file
 * template.php
 */


/**
 * Preprocess variables for html.tpl.php
 *
 * @see system_elements()
 * @see html.tpl.php
 */
//function opsview7bootstrap_preprocess_html(&$variables) {
//}

//function opsview7bootstrap_preprocess_page(&$variables) {
//}
/**
 * Theme preprocess function for theme_field() and field.tpl.php.
 *
 * @see theme_field()
 * @see field.tpl.php
 */
//function opsview7bootstrap_preprocess_field(&$variables, $hook) {
//}

/**
 * Implements hook_preprocess_region().
 */
function opsview7bootstrap_preprocess_region(&$variables) {
  if ($variables['region'] == 'footer') {
    $variables['classes_array'][] = 'row';
  }
}
/**
 * Implements hook_preprocess_block().
 */
function opsview7bootstrap_preprocess_block(&$variables) {
  if ($variables['theme_hook_suggestions'][0] == 'block__footer') {
    $variables['classes_array'][] = 'col-sm-2';
  }
  if ($variables['block_html_id'] == 'block-block-1') {
    $variables['classes_array'][] = 'contact-block';
  }
  if ($variables['block_html_id'] == 'block-block-2') {
    $variables['classes_array'][] = 'copyright-block';
  }
  if ($variables['block_html_id'] == 'block-block-3') {
    $variables['classes_array'][] = 'social-icons';
  }
}


/**
 * Overrides theme_menu_local_tasks().
 * Adds 'container' class to primary tabs to have them centered no matter the layout
 */
function opsview7bootstrap_menu_local_tasks(&$variables) {
  $output = '';

  if (!empty($variables['primary'])) {
    $variables['primary']['#prefix'] = '<h2 class="element-invisible">' . t('Primary tabs') . '</h2>';
    $variables['primary']['#prefix'] .= '<ul class="tabs--primary nav nav-tabs container">';
    $variables['primary']['#suffix'] = '</ul>';
    $output .= drupal_render($variables['primary']);
  }

  if (!empty($variables['secondary'])) {
    $variables['secondary']['#prefix'] = '<h2 class="element-invisible">' . t('Secondary tabs') . '</h2>';
    $variables['secondary']['#prefix'] .= '<ul class="tabs--secondary pagination pagination-sm">';
    $variables['secondary']['#suffix'] = '</ul>';
    $output .= drupal_render($variables['secondary']);
  }

  return $output;
}

/**
 * Overrides theme_status_messages().
 * Adds 'container' class to alert messages
 */
function opsview7bootstrap_status_messages($variables) {
  $display = $variables['display'];
  $output = '';

  $status_heading = array(
    'status' => t('Status message'),
    'error' => t('Error message'),
    'warning' => t('Warning message'),
    'info' => t('Informative message'),
  );

  // Map Drupal message types to their corresponding Bootstrap classes.
  // @see http://twitter.github.com/bootstrap/components.html#alerts
  $status_class = array(
    'status' => 'success',
    'error' => 'danger',
    'warning' => 'warning',
    // Not supported, but in theory a module could send any type of message.
    // @see drupal_set_message()
    // @see theme_status_messages()
    'info' => 'info',
  );

  foreach (drupal_get_messages($display) as $type => $messages) {
    $class = (isset($status_class[$type])) ? ' alert-' . $status_class[$type] : '';
    $output .= "<div class=\"alert container alert-block$class\">\n";
    $output .= "  <a class=\"close\" data-dismiss=\"alert\" href=\"#\">&times;</a>\n";

    if (!empty($status_heading[$type])) {
      $output .= '<h4 class="element-invisible">' . $status_heading[$type] . "</h4>\n";
    }

    if (count($messages) > 1) {
      $output .= " <ul>\n";
      foreach ($messages as $message) {
        $output .= '  <li>' . $message . "</li>\n";
      }
      $output .= " </ul>\n";
    }
    else {
      $output .= $messages[0];
    }

    $output .= "</div>\n";
  }
  return $output;
}
/**
 * Implements theme_menu_link().
 * Takes parent theme's theme_bootstrap_links() and gets rid of <span class="caret"></span>
 */
function opsview7bootstrap_menu_link($variables) {
  $element = $variables['element'];
  $sub_menu = '';

  if ($element['#below']) {
    // Prevent dropdown functions from being added to management menu so it
    // does not affect the navbar module.
    if (($element['#original_link']['menu_name'] == 'management') && (module_exists('navbar'))) {
      $sub_menu = drupal_render($element['#below']);
    }
    elseif ((!empty($element['#original_link']['depth'])) && ($element['#original_link']['depth'] == 1)) {
      // Add our own wrapper.
      unset($element['#below']['#theme_wrappers']);
      $sub_menu = '<ul class="dropdown-menu">' . drupal_render($element['#below']) . '</ul>';
      // Generate as standard dropdown.
      // $element['#title'] .= ' <span class="caret"></span>';
      $element['#attributes']['class'][] = 'dropdown';
      $element['#localized_options']['html'] = TRUE;

      // Set dropdown trigger element to # to prevent inadvertant page loading
      // when a submenu link is clicked.
      $element['#localized_options']['attributes']['data-target'] = '#';
      $element['#localized_options']['attributes']['class'][] = 'dropdown-toggle';
      $element['#localized_options']['attributes']['data-toggle'] = 'dropdown';
    }
  }
  // On primary navigation menu, class 'active' is not set on active menu item.
  // @see https://drupal.org/node/1896674
  if (($element['#href'] == $_GET['q'] || ($element['#href'] == '<front>' && drupal_is_front_page())) && (empty($element['#localized_options']['language']))) {
    $element['#attributes']['class'][] = 'active';
  }
  $output = l($element['#title'], $element['#href'], $element['#localized_options']);
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}