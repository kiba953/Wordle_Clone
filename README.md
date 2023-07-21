<h1>Wordle Clone</h1>
<h3>Hello, This is a clone of the popular game from new york times called Wordle</h3>
<p>To Use the Code, Follow These steps</p>
<ol>
  <li>Clone the repository in your local system</li>
  <li>Open a terminal in the root folder of the repository and type <bold>npm install .</bold>(This will install all the required packages)</li>
  <li>In the terminal type <bold>npm run start</bold></li>
  <li>In another teminal type <bold>json-server ./data/data.json --port 8000</bold>  (you can other ports but you will have to change them in ur code and you cant use port 3000 since your code is running on that port)</li>
  <li>In Case the previous step throws an error you can try the following steps
    <ul>
      <li>Open powershell in admin mode</li>
      <li>Type the following command in the powershell terminal <bold>Set-ExecutionPolicy Remotesigned</bold></li>
      <li>Now it should work, once you are done playing the game you can return to your previous setting using the command <bold>Set-ExecutionPolicy Restricted</bold></li>
    </ul>
  </li>
</ol>
