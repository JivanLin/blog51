<?php
namespace app\admin\service;

use think\file\File;

class SrvUpload
{
    public function upload($name, $size)
    {
        $File = new File();
        $allow = array(
            '.jpg','.png','.jpeg','.psd','.gif'
        );
        if($size == 0){
            $size=20480;
        }
        $ROOT = dirname(dirname(dirname(__DIR__)));
        $uploadPath = $ROOT."/public/upload/";
        $result = $File->upload($name,$uploadPath,'',$size,$allow);
        if($result['state']){
            //返回参数是官网规定的格式
            return array(
                'code' => 0, //0表示成功，其它失败
                'msg' => '', //提示信息，一般上传失败后返回
                'data' => [
                    'src' => '/upload/'.$result['url'],
                    //'title' => '', //可选
                ],
            );
        }
        return array(
            'code' => 1,
            'msg' => $result['msg']
        );
    }
}
