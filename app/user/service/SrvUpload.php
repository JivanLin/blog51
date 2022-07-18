<?php
namespace app\user\service;

use think\file\File;

class SrvUpload
{
    public function upload($name, $size, $type)
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

        //返回官网规定的参数格式
        if($type == 'layui') {
            $res = array(
                'code' => 1, //0成功 1失败
                'msg' => $result['msg'],
                'data' => [],
            );
            if($result['state']){
                $res['code'] = 0;
                $res['data'] = [
                    'src' => '/upload/'.$result['url'],
                    //'title' => '', //可选
                ];
            }
        }
        if($type == 'editormd') {
            $res = array(
                'success' => 0, //0失败 1成功
                'message' => $result['msg'],
                'url' => '',
            );
            if($result['state']){
                $res['success'] = 1;
                $res['url'] = '/upload/'.$result['url'];
            }
        }
        return $res;
    }
}
