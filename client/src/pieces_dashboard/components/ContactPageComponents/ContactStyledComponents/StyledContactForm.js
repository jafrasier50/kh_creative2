import styled from "styled-components";

export const StyledContactForm = styled.div`
  /* Mobile first queries */
/* max-width:450px; */
margin:auto;
@media(max-width: 999px){
.socialIconsDiv{
  display:none;
}}

.contactHeader{
  color:white;
  padding-top:25px;
  padding-bottom:25px;

}
.contactFormLeft{
  background-color:rgba(20,20,20,0.9)
}
.contactForm{
  padding-top:30px;
  padding-bottom:30px;

}

.submit-button{
  margin:auto;
  width:81%
}

.contactFormRight{
  color:white;
  background-color:rgba(0,0,0,0.9);
  padding-top:30px;
  padding-bottom:30px;  
  text-align:center;

}
 .icon{
   height:30px;
   width:30px;
   margin:auto;
   margin-right:10px;
 }

.contactFormRight ul {
  list-style:none;
  display:inline;
}

.contactFormRight ul li {
  margin-top: 10px;
}

@media(max-width: 1000px){
  max-width:450px;
}
  
  /* Larger than mobile */
  @media (min-width: 400px) {
    

  /* Larger than phablet */
  @media (min-width: 550px) {
  }

  /* Larger than tablet */
  @media (min-width: 750px) {
   

  /* Larger than desktop */
  @media (min-width: 1000px) {
    width:100%;
    max-height:800px;
    
  .contact-form{
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
  }

  .contactHeader h1{
    font-size:2.3rem
    }
  .contactFormLeft{
    height:100%;
     width:50%;
     max-width:650px;
   }
  .contactFormRight{
    width:250px;
    min-width:225px;
  }

  .kelly-info-div{
    height:50%; 
    margin:auto;
    }

  .kelly-info-div ul{
    margin: auto;
    height:50%;
}
  .kelly-info-div ul li{
    font-weight:700;
    font-size:1rem
  }

  .socialIconsDiv{
    height:50%;
}
  .socialIcons{
    height:100%;
  }


  /* Larger than Desktop HD */
  @media (min-width: 1200px) {
  }
`;
