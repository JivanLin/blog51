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
        $data['content'] = str_replace("\"", "'", $data['content']);
        $data['content'] = str_replace("\n", "<br>", $data['content']);
        return $data;
    }

    public function essayEditAction($params)
    {
        $params['abstract'] = trim($params['abstract'],'\n');
        if(!$params['id']) {
            $ret = $this->mod->essayInsert($params);
        } else {
            $where = ['id' => $params['id']];
            unset($params['id']);
            $ret = $this->mod->essayUpdate($params,$where);
        }
        return $ret;
    }
}