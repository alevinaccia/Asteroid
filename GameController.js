class controller {

    clearArray(array) {

        for (var i = 0; i < array.length; i++) {

            if (array[i].x > W ||
                array[i].x < 0 ||
                array[i].y > H ||
                array[i].y < 0) {

                array.splice(i);

            }
        }

    }

    distance(obj1 , obj2){
        let deltaX = obj2.x - obj1.x;
        let deltaY = obj2.y - obj1.y;

        let vecDis = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

        return vecDis;
    }

}


