module.exports = `html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #e4e4e4;
}
#pager {
    display: none;
    width: 100%;
    min-height: 100%;
}
a {
    text-decoration: none;
    color: #3b3a36;
    cursor: pointer;
    margin-right: 8px;
}
a:hover {
    color: #e9ece5;
}
ul {
    margin: 0;
    padding: 0;
}
ul li {
    list-style-type: none;
}

input[type="text"]:focus,
input[type="password"]:focus,
textarea:focus,
select:focus {
    outline: none;
    padding-bottom: 9px;
    border-bottom: 2px solid #3b3a36;
}
input[type="text"],
input[type="password"],
textarea,
select {
    box-sizing: border-box;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-shadow: none;
    border-radius: none;
    width: 260px;
    padding-bottom: 10px;
    margin-right: 8px;
    border: none;
    border-bottom: 1px solid #b3c2bf;
}
input {
    height: 20px;
}
textarea {
    height: 50px;
}
label {
    font-size: 14px;
    margin-right: 8px;
}
select {
    width: auto;
    padding: 8px;
    border: 0;
    background-color: white;
    border-bottom: 1px solid #b3c2bf;
    border-radius: 0px;
}
select:focus {
    border-bottom: 1px solid #b3c2bf;
    padding: 8px;
}
fieldset,
.field-line {
    margin: 10px;
    padding: 0;
    outline: 0;
    padding: 0;
    border: 0;
}
.field-item {
    margin: 2px 10px 2px 0px;
}
/*button*/

button,
.black-button {
    min-width: 40px;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    line-height: 20px;
    background-color: #3b3a36;
    color: white;
    border: none;
    text-decoration: none;
}
button:hover,
.black-button:hover {
    background-color: #b3c2bf;
}
button:focus,
.black-button:focus {
    outline: none;
}
button:active,
.black-button:active {
    background-color: #e9ece5;
}
/* add button */

.add-button {
    min-width: 0;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: #3b3a36;
    border: 0px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.6);
}
.add-button:before {
    content: '+';
    font-size: 20px;
    color: white;
}
.add-button:focus {
    outline: none;
}
.add-button:hover {
    background-color: #b3c2bf;
}
.add-button:active {
    background-color: #e9ece5;
}
/* card */

.card, form {
    display: inline-block;
    background-color: white;
    margin: 8px 10px 0px 10px;
    padding: 10px;
    border: 1px solid #d8d8d8;
    box-shadow: 1px 2px 4px #d8d8d8;
    border-radius: 4px;
    font-size: 14px;
}
.card-title {
    font-size: 16px;
    margin: 8px 4px 14px 4px;
    font-weight: bold;
}
/*table*/

table {
    font-size: 14px;
    border: 0;
    vertical-align: baseline;
}
thead th {
    border: 0;
    border-bottom: 2px solid #6678b1;
    padding: 10px 8px;
    outline: 0;
    margin: 0;
}
tbody tr td {
    padding: 9px 8px 0;
    margin: 0;
}
`;