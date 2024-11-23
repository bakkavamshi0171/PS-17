arr1=[1,5,3,4,2]
arr2=[2,4,3,1,7,5,15];
arr3=[]
for(i=0;i<arr1.length;i++){
    for(j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            arr3.push(arr1[i]);
            break
        }
    }
}
if(arr1.length==arr3.length){
    console.log(`arr1 is subset of arr2`)
}else{
    console.log(`arr1 is not a subset of arr2`)
}