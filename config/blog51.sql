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

 Date: 22/07/2022 14:16:39
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
INSERT INTO `admin` VALUES (0, 'admin', 'admin', '8ca8bf2bce0c50aa769e9c3ea0f37cc3', 'c8516e5e50', 1642577119);
INSERT INTO `admin` VALUES (1, 'linwenjia', '林小黑', '8ca8bf2bce0c50aa769e9c3ea0f37cc3', 'c8516e5e50', 1642577119);

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author_id` int(4) NOT NULL DEFAULT 0 COMMENT '作者',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '标题',
  `describe` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '简述',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '内容',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '状态：0编辑；1发布；2屏蔽',
  `atime` int(11) NOT NULL COMMENT '发表时间',
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '类别',
  `tags` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '标签',
  `comment` int(11) NOT NULL DEFAULT 0 COMMENT '评论数',
  `praise` int(11) NOT NULL DEFAULT 0 COMMENT '点赞数',
  `browse` int(11) NOT NULL DEFAULT 0 COMMENT '阅读数',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `status`(`status`) USING BTREE,
  INDEX `author_id`(`author_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, 1, '本园第一篇---测试', '这一篇文章作为开头第一篇，表明该有的功能已经通过，后续奖继续开发其他相应需求功能，加油哦', '### 历程\n##### 选取博客园模板，打造美观前端\n :tw-1f250:\n1. 查阅大多相关博客园，选取到[https://www.cnblogs.com/guangzan/](https://www.cnblogs.com/guangzan/ \"https://www.cnblogs.com/guangzan/\") 网站博客园中的皮肤，\n2. 该博主封装了一套适应博客园皮肤变换的js代码，为 [awescnb](https://www.yuque.com/awescnb \"awescnb\") 主题更换\n3. 下载相应封装代码包，进行筛选geek主题的模板。因其实依据博客园的源代码进行改造，故有些功能在本博客中未能实现出来\n\n##### 修改当前需要功能 :fa-heart:\n	正常显示前端，还有响应式功能\n	后期将打算自己写一套前端css样式代码\n\n##### 再接再厉 :pray:\n- 1.发表相关文章，主要为知识点寄存\n- 2.前端css代码重新自己编写\n- 3.后台系统同前端慢慢优化，增加功能\n- 4.确定方针，不可在拖着时间了\n\n\n------------\n### 思绪\n##### 博客相关\n- 1.分三个宏观 个人博客--管理后台--主博客园\n- 2.系数分配 4 : 4 : 2\n- 3.时间计划 先重写一套博客前端css样式 再添加优化后端功能\n\n##### 工具箱\n后期为自己谱写工具箱方法，让自己的知识点更加巩固，还能为己所用！！！\n![看好！](/upload/2207/221413457769_96cca12f87.jpg \"看好！\")\n', 1, 1658470458, NULL, NULL, 0, 0, 0);

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
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '文章评论' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (1, 1, '慢慢布局，再优化，先有大块框架，再有小细节！', 1641538031);
INSERT INTO `comment` VALUES (7, 1, '功能需求慢慢增加，学会规划整理，快速理清思路', 1641539188);
INSERT INTO `comment` VALUES (8, 1, '你好！', 1651561925);

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
