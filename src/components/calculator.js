import React from "react";

function add( a,b){
return (a+b);
};

function mult( a, b){
return a*b;
}

function divi( a, b){
return a/b;
}

function sub(a,b){
return a-b;
}

export default add;
export {mult, divi, sub}