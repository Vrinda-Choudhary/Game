console.log("inside js")
const player = document.getElementById('player');
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const captureButton = document.getElementById('capture');


  const title = document.getElementById('title') ;
  const video = document.getElementById('video');
  const cameraContainer = document.getElementById('camera-container')

  const constraints = {
    video:true,
 
  };
 


  function changeBG(){
     const container =  document.getElementById('container');
     const canvas = document.getElementById('canvas');
     container.style.background = 'url(./images/grass.svg) no-repeat fixed';
     container.style.width = '100%';
     let image = document.createElement('img');
     image.src = './images/dogstanding.svg';

     image.setAttribute("id","standingdog");

     const dog = document.getElementById('dog');
     dog.appendChild(image);
     let image2 = document.createElement('img');
     image2.src = './images/bowl.svg';

     image2.setAttribute("id","bowl");
     dog.appendChild(image2);

     canvas.style.position = 'relative';
     canvas.style.top = '31px';
     canvas.style.width = '600px';
     canvas.style.height = '400px';

  
  }

  function putFoodinbowl(){
    const canvas = document.getElementById('canvas');
    const canvasContainer = document.getElementById('canvas-container');
    canvasContainer.style.position = 'absolute';
    canvasContainer.style.top = '56px';
    canvasContainer.style.width = '100%';
    canvasContainer.style.height = '405px';
  //  canvas.style.transition = 'all 1s ease-out';
    canvas.style.transitionDuration = '2s';
    canvas.style.position = 'relative';
    canvas.style.top = '0px';
    canvas.style.width = '146px';
   canvas.style.height = '45px'; 

   //done till here

   const dog = document.getElementById('dog');
    const standingdog = document.getElementById('standingdog')
    const bowl = document.getElementById('bowl');

        canvasContainer.style.transition = 'opacity 2s ease-in'
        dog.style.transition = 'opacity 2s ease-out';
        dog.style.opacity = '0';
        canvasContainer.style.opacity = '0'
        
        setTimeout(
            ()=>{
                dog.removeChild(standingdog);
                dog.removeChild(bowl);
                let image = document.createElement('img');
                image.src = './images/dogeating.svg';
                image.setAttribute("id","dogeating");
                dog.appendChild(image);

                canvasContainer.style.transition = 'opacity 2s ease-in'
                dog.style.transition  = 'opacity 2s ease-in'
                canvasContainer.style.opacity = '1'
                dog.style.opacity = '1'
                dog.style.width = '227px';
                dog.style.margin = '132px -55px';
                
                setTimeout(
                    ()=>{
                        const content = document.getElementById('dogeating');
                        dog.removeChild(content);
                        canvasContainer.parentNode.removeChild(canvasContainer);
                        let image = document.createElement('img');
                        image.src = './images/dogstanding.svg';
                        image.setAttribute("id","dogstanding");
                        dog.appendChild(image);
                        let image2 = document.createElement('img');
                        image2.src = './images/bowl.svg';
                        image2.setAttribute("id","bowl");
                        dog.appendChild(image2);
                        let image3 = document.createElement('img');
                        image3.src = './images/brrrp.svg';
                        image3.setAttribute("id","brrrp");
                        dog.appendChild(image3);
                        
                        dog.style.width = '227px';
                        dog.style.removeProperty('margin')
                        const brrrp = document.getElementById('brrrp');
                        brrrp.style.position = 'relative';
                        brrrp.style.bottom = '288px';
                        brrrp.style.left = '105px';
                        
                        
                        dog.style.opacity = '0'
                        dog.style.transition = 'opacity 2s ease-in'
                        dog.style.opacity = '1'

                        setTimeout(()=>{
                            const brrrp = document.getElementById('brrrp');
                            brrrp.parentNode.removeChild(brrrp)
                            
                            const startagain = document.getElementById('startagain');
                            startagain.style.display = 'block'
                            startagain.setAttribute('class','startagain-on-click');
                            startagain.addEventListener('click',()=>{
                                window.location.reload();
                            })
                        },2000)

                    }
                    ,2000)
                }
                ,1000);
           
  }

  function startover(){
 
          
      }
  



  
  captureButton.addEventListener('click', () => {
      console.log("div is clicked")
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, canvas.width, canvas.height);
    player.srcObject.getVideoTracks().forEach(track => track.stop());

        //removes everything
    title.parentNode.removeChild(title);
    video.parentNode.removeChild(video);
    cameraContainer.parentNode.removeChild(cameraContainer);

        changeBG()
        putFoodinbowl()
        startover()
      //  changedogposition()
  //   foodeaten()
    


  });

  // Attach the video stream to the video element and autoplay.
  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      player.srcObject = stream;
    });

   