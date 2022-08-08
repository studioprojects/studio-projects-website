
window.onload = () => { // load all the page content before transition
  const links = document.querySelectorAll('a');
  const transition_element = document.querySelector('.transition');

  console.log(links);  
  console.log(transition_element);  

  let transitionTime = 300;

  setTimeout(() => {
    transition_element.classList.remove('is-active');
  }, transitionTime);

  for (let i = 0; i < links.length; i++) { // loop through all the links on the page
    const link = links[i];

    link.addEventListener('click', event => { // add an event listener to the links
      event.preventDefault(); // block default click handling
      let target = event.target.href;

      console.log(transition_element);

      transition_element.classList.add('is-active');

      console.log(transition_element);

      setInterval(() => {
        window.location.href = target;
      }, transitionTime);
    })
  }
};