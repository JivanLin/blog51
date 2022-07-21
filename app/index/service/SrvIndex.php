<?php
namespace app\index\service;

use app\index\model\ModIndex;

class SrvIndex
{
    public function __construct()
    {
        $this->mod = new ModIndex();
    }

    public function getArticle($id)
    {
        $where = [
            'id' => $id
        ];
        return $this->mod->getArticle($where);
    }

    public function getArticleList()
    {
        $data = $this->mod->getArticleList(8);
        $list = $data->items();
        $page = $data->render();
        return array(
            'list' => $list,
            'page' => $page,
        );
    }
}
