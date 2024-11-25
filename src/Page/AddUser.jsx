

function AddUser() {

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = {name,email}
    
    fetch("http://localhost:600/addUser",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(user)
      
    })
    .then(res => res.json())
    .then(() => form.reset())
    .catch(err => console.log(err))
  }
  return (
    <div className="">
      <form onSubmit={handleSubmit} className="p-5 shadow-md flex  max-w-[500px] flex-col gap-4 rounded-xl border border-gray-500 " action="">
        <input type="text" name="name" placeholder="User Name" className="input input-bordered  w-full min-w-[300px] max-w-[500px] " />
        <input type="email" name="email" placeholder="User Email" className="input input-bordered  w-full min-w-[300px]  max-w-[500px]" />
        <button type="submit" className="btn btn-neutral  max-w-[500px]">Add User</button>
      </form>
    </div>
  )
}

export default AddUser
