#!/bin/sh

if [ $# -ne 1 ] ; then
echo "parameter error"
exit
else
if [ $1 != "get" ] && [ $1 != "post" ] ; then
echo "parameter error"
exit
fi
fi
 
ftp_host="10.204.16.2"
ftp_user="test"
ftp_password="testtest"
folder_local="/Users/dengdan/WebstormProjects/guanquanhui/site"
folder_remote="/"
temp_shell="sync_temp.sh"
 
cat > $temp_shell << EOF
ftp -v -n << !
open $ftp_host
user $ftp_user $ftp_password
lcd $folder_local
cd $folder_remote
bin
prompt off
EOF
 
if [ $1 =  "get" ]; then
echo "add mget * into $temp_shell"
echo "mget *" >> $temp_shell
elif [ $1 = "put" ]; then
for i in `ls $folder_local`; do
echo "add put $i into $temp_shell"
echo "put $i" >> $temp_shell
done
fi
 
cat >> $temp_shell << EOF
quit
!
EOF
 
chmod 777 $temp_shell
echo "execute $temp_shell"
./$temp_shell
rm $temp_shell