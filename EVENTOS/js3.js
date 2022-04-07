            var link1 = document.querySelectorAll('a')[0]
            var link2 = document.querySelectorAll('a')[1]
            var link3 = document.querySelectorAll('a')[2]
            var link4 = document.querySelectorAll('a')[3]
        
            link1.onmouseover = function(){
                var element = document.getElementById("linkscor")
                element.style.backgroundColor = '#B22222'
            }
            link2.onmouseover = function(){
                var element = document.getElementById("linkscor")
                element.style.backgroundColor = '#3CB371'
            }
            link3.onmouseover = function(){
                var element = document.getElementById("linkscor")
                element.style.backgroundColor = '#1E90FF'
            }
            link4.onmouseover = function(){
                var element = document.getElementById("linkscor")
                element.style.backgroundColor = '#FFD700'
            }