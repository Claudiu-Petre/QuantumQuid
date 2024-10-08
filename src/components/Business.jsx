import { features } from "../constants";
import styles, {layout} from "../style";
import Button from "./Button";
import PropTypes from "prop-types";


const FeatureCard = ({ icon, title, content, index }) => (
<div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
  <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
    <img src={icon} className="w-[50%] h-[50%] object-contain" />
  </div>
  <div className="flex-1 flex flex-col ml-3">
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
      {title}
    </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
      {content}
      </p>
  </div>
</div>
);

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const Business = () => (
  
   <section 
    id="features" 
    className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
          You focus on your business, {" "}
          <br className="sm:block hidden"/>
          {/* <br/> */}
          we'll manage the capital!
      </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve
          your financial life by building credit, 
          earning rewards and saving money. But With
          hundred of credit cards on the market
        </p>

        <Button styles="mt-10" />
    </div>

{/* The cards */}
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...features} index={index} />
      ))}
    </div>

      
  </section >
  )


export default Business
