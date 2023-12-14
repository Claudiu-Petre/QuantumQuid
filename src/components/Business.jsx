
import { features } from "../constants/index";
import styles, {layout} from "../style";
import Button from "./Button"


const FeatureCard = ({ icon, title, content, index }) => (
  <div>
    <div>
      <img src={icon} alt="icon" />
    </div>

  </div>
)

const Business = () => {
  return (
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
            <FeatureCard key={feature.id} {... features} index={index}/>
          ))}
        </div>

      
  </section >
  )
}

export default Business
