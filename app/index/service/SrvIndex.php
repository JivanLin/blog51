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
        return $this->mod->getArticle($id);
    }

    public function getArticleList()
    {
        return $this->mod->getArticleList();
    }
}
