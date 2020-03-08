import {PROCESSING_METHOD_SEMI_WASHED, PROCESSING_METHOD_NATURAL, PROCESSING_METHOD_OTHER, WEIGHT_UNIT_BAG10KG, WEIGHT_UNIT_KG, WEIGHT_UNIT_BAG60KG} from '../testData/util/enums.js';
import {CERTIFICATES} from '../testData/util/fixtures.js';
export default function dataFetcher(input){


// Parse data from JSON, evaluate and store stringified results in a variable

    var parsedData = JSON.parse(input);

    // Create a coffee object constructor

    var coffee = {};

    // Fill a coffee object based on our data

    switch (parsedData.process) {

    	case 'SEMI_WASHED':
    	coffee.process = PROCESSING_METHOD_SEMI_WASHED;
    	break;

    	case 'NATURAL':
    	coffee.process = PROCESSING_METHOD_NATURAL;
    	break;

    	case 'OTHER':
    	coffee.process = PROCESSING_METHOD_OTHER;

    	default:
    	coffee.process = undefined;
    	break;

    };

    switch(parsedData.weight.unit) {

    	case 'BAG10KG':
    	coffee.weight = {unit: WEIGHT_UNIT_BAG10KG};
    	break;

    	case 'KG':
    	coffee.weight = {unit: WEIGHT_UNIT_KG};
    	break;

    	case 'BAG60KG':
    	coffee.weight = {unit: WEIGHT_UNIT_BAG60KG};
    	break;

    	default:
    	coffee.weight = undefined;
    	break;

    }



    var finalData = JSON.stringify(coffee);

	// Create a new Blob with a link to file download

	var myFile = null;
    var writeToFile = function (result) {
    
    var outputData = new Blob([result]);

   	if (myFile !== null){
   
    	window.URL.revokeObjectURL(myFile);
   
        }

      	myFile = window.URL.createObjectURL(outputData);
          		return myFile;
        };

    // Save blobbed data to file and serve to user


    var textLink = document.getElementById('downloadLink');
    textLink.href = writeToFile(finalData);
    textLink.style.display = 'block';
    textLink.click();



}