<?php
namespace app\admin\service;

use app\admin\model\ModArticle;

class SrvArticle
{
    public function __construct()
    {
        $this->mod = new ModArticle();
    }

    public function articleListJson($params)
    {
        if($params['page'] < 0) {
            $params['page'] = 1;
        }
        !$params['limit'] && $params['limit'] = 15;

        return $this->mod->articleListJson($params);
    }

    public function getArticle($id)
    {
        return $this->mod->getArticle($id);
    }

    public function addArticleAction($data)
    {
        if(!$data['title'] || !$data['content']) {
            return fail('缺少必要参数');
        }

        $res = $this->mod->addArticleAction($data);
        if($res !== false) {
            return success('','提交成功');
        }
        return fail('提交失败');
    }

    public function updateArticleStatus($id,$status)
    {
        $update = [];
        $where = ['id' => $id];
        if($status == 0) {
            $update = ['status' => 1];
        }
        if($status == 1) {
            $update = ['status' => 2];
        }
        $res = $this->mod->updateArticleStatus($update, $where);
        if($res) {
            return success('','成功');
        }
        return fail('失败');
    }

}