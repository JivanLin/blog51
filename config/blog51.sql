/*
 Navicat Premium Data Transfer

 Source Server         : 本地所有 127.0.0.1 3307
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3307
 Source Schema         : blog51

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 25/01/2022 18:50:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` char(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `nick` char(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `pwd` char(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `salt` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `create_time` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'linwenjia', '林小黑', '8ca8bf2bce0c50aa769e9c3ea0f37cc3', 'c8516e5e50', 1642577119);

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '标题',
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '图片',
  `describe` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '描述',
  `content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '内容',
  `comment` int(4) NOT NULL DEFAULT 0 COMMENT '评论数',
  `praise` int(4) NOT NULL DEFAULT 0 COMMENT '点赞数',
  `browse` int(4) NOT NULL DEFAULT 0 COMMENT '浏览数',
  `atime` int(11) NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '文章列表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, '1', '我能成为你单身路上的绊脚石吗', '/static/images/icon1.png', 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.', 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.', 0, 13, 554, 1641460522);
INSERT INTO `article` VALUES (2, '1', '未经他人苦，莫劝他人善！', '/static/images/icon2.png', 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.', 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.', 2, 158, 2268, 1641460522);
INSERT INTO `article` VALUES (3, '1', '请一定照顾好我这个小朋友呀', '/static/images/icon3.png', 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.', 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.', 0, 2, 243, 1641460522);
INSERT INTO `article` VALUES (4, NULL, '123', NULL, '321', '1<b>2<i>3</i></b>', 0, 0, 0, NULL);
INSERT INTO `article` VALUES (5, NULL, '333', NULL, '333', '333', 0, 0, 0, NULL);
INSERT INTO `article` VALUES (6, NULL, '123', NULL, '11', '11', 0, 0, 0, NULL);
INSERT INTO `article` VALUES (7, NULL, '222', NULL, '222', '444<b>444</b>', 0, 0, 0, NULL);

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article_id` int(11) NULL DEFAULT NULL COMMENT '文章编号',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '评论内容',
  `atime` int(11) NULL DEFAULT NULL COMMENT '评论时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `article_id`(`article_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '文章评论' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (1, 1, '慢慢布局，再优化，先有大块框架，再有小细节！', 1641538031);
INSERT INTO `comment` VALUES (7, 1, '功能需求慢慢增加，学会规划整理，快速理清思路', 1641539188);

-- ----------------------------
-- Table structure for essay
-- ----------------------------
DROP TABLE IF EXISTS `essay`;
CREATE TABLE `essay`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '标题',
  `abstract` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '摘要',
  `content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '内容',
  `tags` tinyint(2) NOT NULL DEFAULT 0 COMMENT '标签',
  `browse` int(4) NOT NULL DEFAULT 0 COMMENT '浏览数',
  `comment` int(4) NOT NULL DEFAULT 0 COMMENT '评论数',
  `praise` int(4) NOT NULL DEFAULT 0 COMMENT '点赞数',
  `state` tinyint(1) NOT NULL DEFAULT 0 COMMENT '状态 0正常 1软删除',
  `atime` int(11) NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '文章列表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of essay
-- ----------------------------
INSERT INTO `essay` VALUES (1, 'Git的使用和安装', 'Git是什么，Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理项目，也是个内容管理系统(CMS)，工作管理系统等。那么要如何安装并使用它呢，可查看官网相关文档：http://git-scm.com/docs', '<p><span>许多人认为 Git 太混乱，或认为它是一种复杂的版本控制系统，其实不然，这篇文章有助于大家快速上手使用 Git。</span></p><p><span><img src=\"/upload/2201/251731014355_e6195dc037.jpg\" alt=\"undefined\"><br></span></p><h2>入门</h2><p>使用Git前，需要先建立一个仓库(repository)。您可以使用一个已经存在的目录作为Git仓库或创建一个空目录。</p><p>使用您当前目录作为Git仓库，我们只需使它初始化。</p><pre class=\"prettyprint prettyprinted\"><span class=\"pln\">git init</span></pre><p>使用我们指定目录作为Git仓库。</p><pre class=\"prettyprint prettyprinted\"><span class=\"pln\">git init newrepo</span></pre><p>从现在开始，我们将假设您在Git仓库根目录下，除非另有说明。</p><h3><span>添加新文件</span></h3><p>我们有一个仓库，但什么也没有，可以使用add命令添加文件。</p><pre class=\"prettyprint prettyprinted\"><span class=\"pln\">git add filename</span></pre><p>可以使用add... 继续添加任务文件。</p><h3><span>提交版本</span></h3><p>现在我们已经添加了这些文件，我们希望它们能够真正被保存在Git仓库。</p><p>为此，我们将它们提交到仓库。</p><pre class=\"prettyprint prettyprinted\"><span class=\"pln\">git commit </span><span class=\"pun\">-</span><span class=\"pln\">m </span><span class=\"str\">\"Adding files\"</span></pre><p>如果您不使用-m，会出现编辑器来让你写自己的注释信息。</p><p>当我们修改了很多文件，而不想每一个都add，想commit自动来提交本地修改，我们可以使用-a标识。</p><pre class=\"prettyprint prettyprinted\"><span class=\"pln\">git commit </span><span class=\"pun\">-</span><span class=\"pln\">a </span><span class=\"pun\">-</span><span class=\"pln\">m </span><span class=\"str\">\"Changed some files\"</span></pre><p>git commit 命令的-a选项可将所有<strong>被修改或者已删除的且已经被git管理的文档</strong>提交到仓库中。</p><p><span>千万注意，-a不会造成新文件被提交，只能修改。</span></p><h3><span>发布版本</span></h3><p>我们先从服务器克隆一个库并上传。</p><pre class=\"prettyprint prettyprinted\"><span class=\"pln\">git clone ssh</span><span class=\"pun\">:</span><span class=\"com\">//example.com/~/www/project.git</span></pre><p>现在我们修改之后可以进行推送到服务器。</p><pre class=\"prettyprint prettyprinted\"><span class=\"pln\">git push ssh</span><span class=\"pun\">:</span><span class=\"com\">//example.com/~/www/project.git</span></pre><h3><span>取回更新</span></h3><p>如果您已经按上面的进行push，下面命令表示，当前分支自动与唯一一个追踪分支进行合并。</p><pre class=\"prettyprint prettyprinted\"><span class=\"pln\">git pull</span></pre><p>从非默认位置更新到指定的url。</p><pre class=\"prettyprint prettyprinted\"><span class=\"pln\">git pull http</span><span class=\"pun\">:</span><span class=\"com\">//git.example.com/project.git</span></pre><h2>已经超过了五分钟？</h2><h3><span>删除</span></h3><p>如何你想从资源库中删除文件，我们使用rm。</p><pre class=\"prettyprint prettyprinted\"><span class=\"pln\">git rm file</span></pre><h3><span>分支与合并</span></h3><p>分支在本地完成，速度快。要创建一个新的分支，我们使用branch命令。</p><pre class=\"prettyprint prettyprinted\"><span class=\"pln\">git branch test</span></pre><p>branch命令不会将我们带入分支，只是创建一个新分支。所以我们使用checkout命令来更改分支。</p><pre class=\"prettyprint prettyprinted\"><span class=\"pln\">git checkout test</span></pre><p>第一个分支，或主分支，被称为\"master\"。</p><pre class=\"prettyprint prettyprinted\"><span class=\"pln\">git checkout master</span></pre><p>对其他分支的更改不会反映在主分支上。如果想将更改提交到主分支，则需切换回master分支，然后使用合并。</p><pre class=\"prettyprint prettyprinted\"><span class=\"pln\">git checkout master\ngit merge test</span></pre><p>如果您想删除分支，我们使用-d标识。</p><pre class=\"prettyprint prettyprinted\"><span class=\"pln\">git branch </span><span class=\"pun\">-</span><span class=\"pln\">d test</span></pre><h2><br><span style=\"font-weight: normal;\">来源：http://itmyhome.com/2015/01/git-five-minutes-tutorial</span></h2>', 1, 0, 0, 0, 0, NULL);

-- ----------------------------
-- Table structure for notepad
-- ----------------------------
DROP TABLE IF EXISTS `notepad`;
CREATE TABLE `notepad`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `create_time` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notepad
-- ----------------------------
INSERT INTO `notepad` VALUES (1, '了解学会什么是Git，如何安转使用', '<p>刚开始接触时挺懵的，不懂的如何连接，也完全不熟悉命令操作。首先连接需要下载git，然后使用git生成秘钥配置，用于第三方GitHub/Gitee配置连接点，后面使用就有点保障不会被别人使用，接下来会继续深入学习！</p><p><b>一、接触</b></p><p>1）了解大概什么是Git，主要用于代码版本存放，<span>是一个开源的分布式版本控制系统</span></p><p><span>2）安装配置</span></p><p><span>&nbsp; &nbsp; Windows平台的可以直接到Git官网下载.exe安装文件&nbsp;<a target=\"_self\" href=\"https://gitforwindows.org/\">https://gitforwindows.org/</a></span></p><p>&nbsp; &nbsp; Linux平台网上自行查找&nbsp;<img src=\"http://www.blog51.com/layui/layui/images/face/36.gif\" alt=\"[酷]\">&nbsp;，或者到Git官网查看安装&nbsp;<a target=\"_blank\" href=\"https://git-scm.com/downloads\">https://git-scm.com/downloads</a></p><p><b>二、使用</b></p><p>1）<b>本地库和远程库链接</b> 如何操作</p><p>2）冲突文件如何处理</p><p>3）注意事项</p><p><img src=\"/upload/2201/181843196696_dffb81cb98.jpeg\" alt=\"undefined\" style=\"max-width:60%\"><br></p>', 1642502601);

-- ----------------------------
-- Table structure for tags
-- ----------------------------
DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '标签名',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tags
-- ----------------------------
INSERT INTO `tags` VALUES (1, 'Git');
INSERT INTO `tags` VALUES (2, 'PHP');
INSERT INTO `tags` VALUES (3, 'JavaScript');
INSERT INTO `tags` VALUES (4, 'HTML');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `nickname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '48s5', '456', '林小黑');

SET FOREIGN_KEY_CHECKS = 1;
