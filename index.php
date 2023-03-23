<?php
/**
 * 掘金高仿版
 * ---------------------
 * 本主题仅供学习交流使用，严禁用于商业用途，请于24小时内删除
 *
 * @package JJ V1.1
 * @author 木灵鱼儿
 * @version 1.1
 * @link https://www.mulingyuer.com
 */
?>
<?php if (!defined('__TYPECHO_ROOT_DIR__')) {
    exit;
}
?>
<?php if (!isAjax()): ?>
<!DOCTYPE html>
<html lang="zh-CN">
  <?php $this->need("./php_modules/notes.php");?>
<head>
  <?php $this->need("./php_modules/default_head.php");?>
  <?php $this->need("./dist/head/home.php");?>
</head>
<body>
  <?php $this->need("./php_modules/header.php");?>
  <?php $this->need("./php_modules/nav.php");?>
  <main class="main" role="main">
    <div class="container">
      <div class="main-content home-content">
        <div class="main-left">
          <?php $this->need("./php_modules/home/nav.php");?>
<?php endif;?>
          <?php //是否有内容?>
          <?php if ($this->have()): ?>
            <?php $this->need("./php_modules/article_skeleton.php");?>
            <?php $this->need("./php_modules/article_card.php");?>
          <?php else: ?>
            <?php $this->need("./php_modules/article_empty.php");?>
          <?php endif;?>
          <?php $this->need("./php_modules/article_pagination.php");?>
<?php if (!isAjax()): ?>
        </div>
        <div class="main-right">
          <?php $this->need("./php_modules/home/recent_comments.php");?>
          <?php $this->need("./php_modules/home/theme_tool.php");?>
          <?php $this->need("./php_modules/footer.php");?>
        </div>
      </div>
    </div>
  </main>
  <?php $this->need("./php_modules/fixed_tool.php");?>
  <?php //自定义脚本 ?>
  <?php $this->options->customScript();?>
</body>
</html>
<?php endif;?>