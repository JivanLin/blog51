<?php
namespace app\user\service;

use app\user\model\ModManage;
class SrvManage
{
    public function __construct()
    {
        $this->mod = new ModManage();
    }

    public function articleList($page, $limit)
    {
        $data = $this->mod->articleList($page, $limit);
        $list = $data['list'];
        foreach($list as $key => &$value) {
            $value['tags'] = explode(',', $value['tags']);
        }
        $data['list'] = $list;
        return $data;
    }

    public function getArticle($id)
    {
        if(!$id) {
            return [];
        }
        return $this->mod->getArticle($id);
    }

    public function addArticleAction($params)
    {
        $data = [
            'id' => $params['id'],
            'title' => $params['title'],
            'describe' => $params['describe'],
            'content' => $params['content-md'],
            'author_id' => SrvAuth::get_cookie('id'),
        ];

        if (!$data['title'] || !$data['content']) {
            return fail('缺少必要参数');
        }

        $ret = $this->mod->addArticleAction($data);
        if ($ret) {
            return success('', '保存成功');
        }
        return fail('保存失败');
    }

    public function articlePublish($id)
    {
        $where = ['id' => $id];
        $update = [
            'status' => 1,
            'atime' => time(),
        ];
        $ret = $this->mod->updateArticle($where, $update);
        if ($ret) {
            return success('', '发布成功');
        }
        return fail('发布失败，请等待技术排查');
    }

    public function delArticle($id)
    {
        $where = ['id' => $id];
        $ret = $this->mod->delArticle($where);
        if ($ret) {
            return success('', '删除成功');
        }
        return fail('删除失败，请等待技术排查');
    }

}