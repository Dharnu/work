<?php


class xml2json {
private $result;
public function __construct($xml){
	$content = preg_replace("/(<\/?)(\w+):([^>]*>)/", "$1$3", $xml);
	$this->result=$this->XML2JSON($content);
}

 private function XML2JSON(&$xml) {
    function normalizeSimpleXML($obj, &$result) {
        $data = $obj;
        if (is_object($data)) {
            $data = get_object_vars($data);
        }
        if (is_array($data)) {
            foreach ($data as $key => $value) {
                $res = null;
                normalizeSimpleXML($value, $res);
                if (($key == '@attributes') && ($key)) {
                    $result = $res;
                } else {
                    $result[$key] = $res;
                }
            }
        } else {
            $result = $data;
        }
    }
    normalizeSimpleXML(simplexml_load_string($xml), $result);
    return json_encode($result);
}


}


