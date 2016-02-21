#/!bin/bash

npm install --save express request zlib

if [ $? -wq 0 ]
then
	echo "WIN"
	exit 0
else 
	echo "LOSE" > &2
	exit 1
fi
