<?php
namespace App\MyTrippediaClasses;

use makeSoapRequest;
class pingATECurl implements pingATE{

private $request;
private $response;
private $headers=array( 
            "Content-type: text/xml;charset=UTF-8", 
            "Accept: */*", 
            "Pragma: no-cache", 
        ); 
public function sendRequest(array $data){
	//init curl object
	$this->request=curl_init();
	// make soap message
	makeSoapRequest::construct($data["Template"]);
	//make headers
	$this->prepareHeaders($data);
	$this->prepareRequest($data);
	//finally
	$this->executeRequest();
	
	}
public function getResponse(){
		}
private function prepareRequest(){
	curl_setopt($this->request, CURLOPT_URL,$data["Url"]); 
        curl_setopt($this->request, CURLOPT_RETURNTRANSFER, 1); 
        curl_setopt($this->request, CURLOPT_TIMEOUT, 60); 
//	curl_setopt($this->request, CURLOPT_VERBOSE, 1);
//	curl_setopt($this->request, CURLOPT_HEADERFUNCTION, array($this,"HandleHeaderLine"));
	curl_setopt($this->request, CURLOPT_HEADER, 1);
        curl_setopt($this->request, CURLOPT_HTTPHEADER, $this->headers); 
        curl_setopt($this->request, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']); 
        curl_setopt($this->request, CURLOPT_POST, 1); 
        curl_setopt($this->request, CURLOPT_POSTFIELDS, makeSoapRequest::getSoapEnvolope()); 
}
private function prepareHeaders(&$data){
	array_unshift($this->headers,"SOAPACTION: ".$data["SoapAction"]);
	array_unshift($this->headers,"Content-length: ".makeSoapRequest::getEnvolopeLength());
	if(!isset($data["Cookie"])){	
				array_unshift($this->headers,"Cookie: ".$data["Cookie"]);
			}
		}
private function executeRequest(){
	$this->parseResponse(curl_exec($this->request));
	}

private function  parseResponse(){
	$header_size = curl_getinfo($this->request, CURLINFO_HEADER_SIZE);
	$this->response["Header"]=substr($response, 0, $header_size);
	$this->response["Body"] = substr($response, $header_size);
}
}
