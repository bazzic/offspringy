<?php
/**
 * @file
 * accommodation.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function accommodation_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function accommodation_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function accommodation_node_info() {
  $items = array(
    'accommodation' => array(
      'name' => t('Accommodation'),
      'base' => 'node_content',
      'description' => t('Any accommodation that has a location in google places.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
