<?php
namespace app\admin\controller;

use app\admin\service\SrvUpload;
use think\Request;

class CtlUpload
{
    public function uploadImage()
    {
        $this->request = new Request();
        $this->srv = new SrvUpload();

        $name = 'file';
        $size = $_FILES["file"]['size'];
        $res = $this->srv->upload($name, $size);
        return json_encode($res);
    }
}
