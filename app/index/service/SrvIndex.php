<?php
namespace app\index\service;

use app\index\model\ModIndex;

class SrvIndex
{
    public function __construct()
    {
        $this->mod = new ModIndex();
    }

    public function getArticle()
    {
        $list = $this->mod->getArticle();
        if(count($list) == 1) {
            $list = $list[0];
        }
        return $list;
    }
}
