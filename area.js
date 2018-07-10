function getArea(arr){
	if(!(typeof arr === "undefined")){
		if(Array.isArray(arr)){
			if(arr.length == 2){
				arr[0] += " ";
				arr[1] += " ";
				if((!isNaN(arr[0])) && (!isNaN(arr[1]))){
					var a = parseInt(arr[0]);
					var b = parseInt(arr[1]);
					if((a >= 0) && (b >= 0)){
						// OK
						return a*b;
					}
					else{
						// Input are negatives
						return -1;
					}
				}
				else{
					// Array items aren't numbers
					return -1;
				}
			}
			else{
				// Array length out of available range
				return -1;
			}
		}
		else{
			// Parameter arr isnt' array
			return -1;
		}
	}
	else{
		// Variable arr doesn't set
		return -1;
	}
}

module.exports = getArea;