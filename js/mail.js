
 let form = document.getElementById('myForm');

    form.addEventListener('submit',function(event){
    event.preventDefault();

    let errors=[];
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value
        let project = document.getElementById('project').value;
        let subject = document.getElementById('subject').value
        let message = document.getElementById('message').value;
        console.log(name,"name")
        if(name==""||name<3){
            setTimeout(() => {
                errors.push('Please Enter valid name');   
            },3000); 
        }
        
        let email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(!email_pattern.test(email)){
            
            setTimeout(() => {
                errors.push('Plese enter a valid email address');  
            },3000);
        }
        if(message.length < 5){
           setTimeout(()=>{
             errors.push('message must containe atleast 5 character');
           },3000)
        }

        let phone_pattern = /^[6-9]\d{9}$/;

        if (!phone_pattern.test(phone)||phone.lenngth<10 || phone.length>10 ) {
            setTimeout(() => {
                errors.push('Please enter a valid 10-digit phone number');  
            },3000);
            
        }
        if(errors.length > 0){
            // document.querySelector('.loading').classList.remove('d-block');
            document.querySelector('.error-message').innerHTML = errors.join('');
            document.querySelector('.error-message').classList.add('d-block');
        }else{
            
            var params ={
                name : document.getElementById('name').value,
                email : document.getElementById('email').value,
                phone : document.getElementById('phone').value,
                place : document.getElementById('project').value,
                subject : document.getElementById('subject').value,
                message : document.getElementById('message').value

            }
                emailjs.send("service_ruokenj","template_uv4kxcb",params).then(function(){
                }).then(function(){
                    document.querySelector('.sent-message').classList.add('d-block');
                    setInterval(()=>{
                        document.querySelector('.sent-message').classList.remove('d-block');
                    },3000)
                    form.reset()
                })

                
        }


})