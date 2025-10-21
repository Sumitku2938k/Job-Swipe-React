import React from 'react';
import Card from './components/Card.jsx';

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "4 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hr",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "8 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACUCAMAAADIzWmnAAAAnFBMVEX19fX7DwH////9AADv397vREL2+fj3MzLw1tT0+fb6MzP6AAD37+7sXlz///33AADxAADoAADpfXr4//3qZl759vHuqaf28/j46+f3+f3y+PHtuLPkcG7yU1DscG/wsarnUlDkZGDtJyD54tn2zMjuGBbsko7tmpX74+DweXTzw8HyExDxdG7dfHbytrb62dntPTjmRkPriYbziIC8qtqMAAADy0lEQVR4nO2a63LaMBBGhVSUunK1MkJgSrmlCQGSNknz/u9WGZBxsN2J8Vii0z2/uNjD4ZNXl5EIQRAEQRAEQRAEQRAEQRAEQRAEQf4VeMQ/BJlYSHS8yZPcmHCudfqpCamejO2N3zwp2iy0mX6f9Zswm0+NJtHYl+MkXiQgBGuCYJCMYl8tTXg6VKIH0GuCvZqpYcp9WNpnMV7C/jebI5bpxIMjJ+mQXeK3D1OsYg+OYz26KEJnOfLR2CYRLRxFIrtX5K1itJILHnXtaFYXP4172Ipw07Hjpt/Ssb/puh/nn7+0cxQ3n7uuGuv4wZKp+SuhHQUTR+qzDusI7HbguK2VDJxj8kPSA3Kj6q4K66gGNHekg7peNLDjnZZOkt6pa6wZO13IDSmN67r6oI6woLQguahp7JCO4t5MCorU3FcHGdIR1rQIpw/VQYZ0TDbvHCWt6X7COQJs5XtHKbfX5vi4o2fo3eOVOc7ivJEd42XVleEcxeg8xrruJ5gjS0we4ynIypVPMEfxRN0waH6aXHJbEWQwR3WXe/2CX/nrH4/la0M5iqFxLczn8ESODS7N0/U42qHaNfXzPbt/1qdQr8QR2Eucl8ob9GBwqprX0qAdKEf4TV2OMmFQLPLyoB3I0Q3VVnOkMucHO6U4fBAn50GGcRRP0g3RcpZ9yV7zQUeW1gxBHEHt8hjv7KTRBqd22n20U8DCO4qvLjUq32D/JczJMVha6n68O8Lh6TsUjJ0yHufeTD0fBkVZ7n785wh2qE7zjievYlvprlO3VQNhHXtZb+iGFZqoDNtDgjoN2uv31wdwhKxZj5nJ0Z4BWMvTXG2ThM0RmBjGWZ9DC8RLAcVC2oZu62xVfc4UgOUdUtb9ZH8mnCN7ScuOxpYJbE+59ot3BKjrh7KirW9bN8lJfiEgpGOS6rKizvpJsXZtLU1x0PbuKIZVMdrxRmQTtvz9mzol6b+utySuIM1mEmLt3pJ1yLYW8LWK5X71r2buvQr6PPYqd7EPPQ3kX7274Vr2Pv6yd+zF8abNlubesev9QuvIWm1q/iM5dn0UgG/67XJk/U33xxVa7w3zqOu94ZZ77EyMdMeGFlpaMjdyTCgZd32Ahuv9Ov9SlI8YsxNIl1e2nbZ7UCTRJF1CttJvfE6qx2CZejnNFdkkV9lav3GaTK3S7g+lkMP5RR6PErvcanQmjmVn4szE26E4EmkznTc7W7icT6WPcinCG57RjLX2dvaxgIk+COc88vEcnnPBg+XvWbzkR0OEiCAIgiAIgiAIgiAIgiAIgiDI/8gfQpxR2apyVc8AAAAASUVORK5CYII=",
    companyName: "Adobe",
    datePosted: "5 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "10 weeks ago",
    post: "Research Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "San Francisco, USA"
  }
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx) {
        return <div key={idx}>
          <Card key={idx} brandLogo={elem.brandLogo} company={elem.companyName} datePosted={elem.datePosted} post={elem.post} location={elem.location} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} />
        </div>
      })}
    </div>
  );
}

export default App;
