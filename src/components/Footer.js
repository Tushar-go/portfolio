import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://github.com/Tushar-go " target='blank'>
            <GitHubIcon />
          </a>
        <a href="mailto:dhalwaltushar@gmail.com">
            <EmailIcon />
          </a>
        <a href="https://www.linkedin.com/in/tushar-dhalwal-4685b7233/" target='blank'>
          <LinkedInIcon />
          </a>
      </div>
      <p> &copy; 2023</p>
    </div>
  );
}

export default Footer;