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

 Date: 18/01/2022 18:46:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
