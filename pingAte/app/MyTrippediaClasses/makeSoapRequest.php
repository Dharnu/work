<?php 

namespace App\MyTrippediaClasses;

class makeSoapRequest{

private $namespaces='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:arr="http://schemas.microsoft.com/2003/10/Serialization/Arrays">';
private $body='';
private $envolope='';
private $requestBodyLength;


public function construct(array $data){
	$this->generateBody($data);
	$this->generateEnvolope();

}
private function generateBody($data){
	$this->body.="<soapenv:Header/><soapenv:Body><tem:".$data["Method"].">";
	foreach($data["Content"] as $key=>$val){
	$this->body.="<tem:".$key.">".$val."</tem:".$key.">";
		}	
	$this->body.="</tem:".$data["Method"]."></soapenv:Body>";
						
					}
private function generateEnvolope(){
	$this->envolope.=$this->namespaces.$this->body."</soapenv:Envelope>";
	$this->requestBodyLength=strlen($this->envolope);
}

public function getEnvolopeLength(){
	return $this->requestBodyLength;	
	}


public function getSoapEnvolope(){
//	return $this->envolope;
	var_dump($this->envolope);
}	
}


