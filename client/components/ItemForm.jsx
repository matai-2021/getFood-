// import React, { useState } from 'react'

// export default function ItemForm (props) {
//   const [form, setForm] = useState(props.formData || {
//     name: '',
//     date: '',
//     quantity: 0,
//     description: ''
//   })

//   function handleChange (e) {
//     const { name, value } = e.target
//     setForm({
//       ...form,
//       [name]: value
//     })
//   }

//   function handleSubmit (e) {
//     e.preventDefault()
//     props.submitEvent(form)
//   }

//   const { name, date, volunteersNeeded, description } = form
//   return (
//     <>
//       <div>
//         <h2 className='title is-5 mb-4'>Item Details</h2>
//         <form>
//           <div className="field">
//             <label
//               htmlFor='title'
//               className='label'>Item Name</label>
//             <input
//               id='title'
//               name='title'
//               className='input is-normal'
//               type='text'
//               placeholder='event title'
//               value={name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="field">
//             <label
//               htmlFor='volunteersNeeded'
//               className='label'
//             >Number of Volunteers</label>
//             <input
//               id='volunteersNeeded'
//               name='volunteersNeeded'
//               className='input is-normal'
//               type='number'
//               min='0'
//               value={volunteersNeeded}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="field">
//             <label
//               htmlFor='description'
//               className='label'
//             >Description</label>
//             <textarea
//               id='description'
//               name='description'
//               className='textarea is-normal'
//               placeholder='event description'
//               value={description}
//               onChange={handleChange}
//             />
//           </div>
//           <button
//             className='button mt-4'
//             onClick={handleSubmit}
//           >{props.action}</button>
//         </form>
//       </div>
//       <div className='column is-half'>
//         <h2 className='title is-5 mb-4'>Event Preview</h2>
//         <div className='box'>
//           {name
//             ? <h2 className='title is-5 is-flex-grow-1'>{name}</h2>
//             : <h2 className='title is-5 is-flex-grow-1'>Your title here</h2>
//           }
//           {date
//             ? <p>{date}</p>
//             : <p>Your date here</p>
//           }
//           <p>{volunteersNeeded} volunteer{Number(volunteersNeeded) !== 1 ? 's' : ''} needed</p>
//           {description
//             ? <p>{description}</p>
//             : <p>Your description here</p>
//           }

//         </div>
//       </div>
//     </>
//   )
// }
