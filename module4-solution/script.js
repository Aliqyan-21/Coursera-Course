var names=new Array();
names[0] = "Aliqyan";
names[1] = "Akash";
names[2] = "Aryan";
names[3] = "Yash";
names[4] = "Sahil";
names[5] = "Joy";
names[6] = "Shantanu";
names[7] = "Maroo";
names[8] = "Dakshesh";
names[9] = "Amal";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}