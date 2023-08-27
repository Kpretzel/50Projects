const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
      name: 'Luke Skywalker',
      position: 'Jedi Knight',
      photo:
        'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_645/3f81df93b7c90baf50b1897fe10b3d77.jpg',
      text:
        "But I Was Going Into Tosche Station to Pick Up Some Power Converters!",
    },
    {
      name: 'Anikan Skywalker',
      position: 'Jedi not granted <br>the rank of master',
      photo: 'https://www.liveabout.com/thmb/62CoLXqCaCTlYOYr8np2Sgjru2k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EP2-IA-32565_R_8x10-56a83bdc5f9b58b7d0f1b389.jpg',
      text:
        'I hate sand!',
    },
    {
      name: 'Yoda',
      position: 'Jedi Master',
      photo: 'https://s.yimg.com/uu/api/res/1.2/kd21pnzcG8o9wWBySzF5iA--~B/aD03MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://66.media.tumblr.com/c39273ac4407792fb51138eb87b0a989/tumblr_inline_odrn23ZN2l1ttbgov_1280.jpg',
      text:
        "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
    },
    {
      name: 'Obi-Wan Kenobi',
      position: 'Jedi Master',
      photo: 'https://i.blogs.es/1ee4c8/obi-wan-4/1366_2000.jpeg',
      text:
        "These aren't the droids you're looking for.",
    },
    {
      name: 'R2D2',
      position: 'Republic Droid',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ovnEtyBmypjMETQc9fdmHi73VvxBVKVtEEg8TZlOWQliffspCRPDXoL48l_Le6PZTj_u&s',
      text:
        "Whirrrrrr…. Click Clack Clank",
    },
    {
      name: 'Count Dooku',
      position: 'Sith Lord',
      photo:
        'https://images.immediate.co.uk/production/volatile/sites/3/2023/04/star-wars-count-dooku-christopher-lee-d35292a.jpg',
      text:
        'The Whispering Of His Name Can Rekindle Hope, And Hope Is Something We Cannot Allow Our Enemy To Possess.',
    },
    {
      name: 'Jar Jar Binks',
      position: 'Chancellor',
      photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Jjportrait.jpg/220px-Jjportrait.jpg',
      text:
        'Well, mesa more of a deep thinker.',
    },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 8000)