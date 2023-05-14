import{_ as a,o as s,c as t,O as n}from"./chunks/framework.915160cd.js";const h=JSON.parse('{"title":"头像换源","description":"","frontmatter":{},"headers":[],"relativePath":"basic-config/avatar.md","filePath":"basic-config/avatar.md"}'),p={name:"basic-config/avatar.md"},e=n(`<h1 id="头像换源" tabindex="-1">头像换源 <a class="header-anchor" href="#头像换源" aria-label="Permalink to &quot;头像换源&quot;">​</a></h1><p>官方默认的源在国内访问非常的慢，可以自己在 Typecho 设置里更换</p><p>找到博客根目录的 <code>config.inc.php</code>文件，在里面加入这句话就行了：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/** 更换gravatar头像源*/</span></span>
<span class="line"><span style="color:#82AAFF;">define</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">__TYPECHO_GRAVATAR_PREFIX__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://gravatar.loli.net/avatar/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span></code></pre></div><p>源的地址有很多，可以自己百度 gravatar 头像源地址</p><h2 id="推荐方案" tabindex="-1">推荐方案 <a class="header-anchor" href="#推荐方案" aria-label="Permalink to &quot;推荐方案&quot;">​</a></h2><p>根据和泽泽的沟通，他提供了一个不错的解决方案，就是采用<strong>cravatar</strong>提供的服务来实现头像展示，这是一个面向国内环境的 Gravatar 头像代替方案，是有降级处理的，首先它会获取这个人在 cravatar 站点设置的头像，如果没有使用 Gravatar 头像，如果没有，则去匹配 QQ 头像，如果也没有，则使用保底的默认图案。</p><p>总体来说这个方案可选性非常好，个人使用了一下速度也很快，值得一用！</p><p>cravatar 官网：<a href="https://cravatar.cn/" target="_blank" rel="noreferrer">https://cravatar.cn/</a></p><p>使用方法和上面头像换源一样，把源地址改成 cravatar 就行了。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/** 更换gravatar头像源*/</span></span>
<span class="line"><span style="color:#82AAFF;">define</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">__TYPECHO_GRAVATAR_PREFIX__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://cravatar.cn/avatar/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span></code></pre></div>`,11),o=[e];function r(l,c,i,_,D,F){return s(),t("div",null,o)}const y=a(p,[["render",r]]);export{h as __pageData,y as default};