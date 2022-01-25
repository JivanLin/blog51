<?php
namespace app\admin\service;

use app\admin\model\ModPlatform;

class SrvPlatform
{
    public function __construct()
    {
        $this->mod = new ModPlatform();
    }

    public function essayList($params)
    {
        $list = $this->mod->essayList($params);
        return $list;
    }

    public function getEssay($params)
    {
        $data = $this->mod->getEssay($params);
        return $data;
    }

    public function essayEditAction($params)
    {
        $isParams = $this->mod->getEssay($params);
        if($isParams) {
            $where = ['id' => $params['id']];
            unset($params['id']);
            return $this->mod->essayUpdate($params,$where);
        }
        return $this->mod->essayInsert($params);
    }
}