<?php
namespace app\user\controller;

use app\user\service\SrvUpload;
use think\Request;

class CtlUpload
{
    public function uploadImage()
    {
        $this->request = new Request();
        $this->srv = new SrvUpload();
        $guid = $this->request->param('guid');
        $type = 'layui';

        $name = 'file';
        if ($guid) {
            $name = 'editormd-image-file';
            $type = 'editormd';
        }

        $size = $_FILES[$name]['size'];
        $res = $this->srv->upload($name, $size, $type);
        return json_encode($res);
    }
}
