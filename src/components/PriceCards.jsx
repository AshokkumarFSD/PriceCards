export default function PriceCards(detailsArray) {

    let freePlanFeature = [
        {
            "title": "Single User",
            "isAvailable": true
        },
        {
            "title": "50GB storage",
            "isAvailable": true
        },
        {
            "title": "Unlimited Public projects",
            "isAvailable": true
        },
        {
            "title": "community Access",
            "isAvailable": true
        },
        {
            "title": "Unlimite Private Projects",
            "isAvailable": false
        },
        {
            "title": "Dedicated Phone Suppport",
            "isAvailable": false
        },
        {
            "title": "Free subdomain",
            "isAvailable": false
        },
        {
            "title": "Monthly Status Reports",
            "isAvailable": false
        }];

    let freePlan = {
        "name": "FREE",
        "price": "$0/month",
        "features": freePlanFeature
    }

    let plusPlanFeature = [
        {
            "title": "5 Users",
            "isAvailable": true
        },
        {
            "title": "50GB storage",
            "isAvailable": true
        },
        {
            "title": "Unlimited Public projects",
            "isAvailable": true
        },
        {
            "title": "community Access",
            "isAvailable": true
        },
        {
            "title": "Unlimite Private Projects",
            "isAvailable": true
        },
        {
            "title": "Dedicated Phone Suppport",
            "isAvailable": true
        },
        {
            "title": "Free subdomain",
            "isAvailable": true
        },
        {
            "title": "Monthly Status Reports",
            "isAvailable": false
        }];

    let plusPlan = {
        "name": "PLUS",
        "price": "$9/month",
        "features": plusPlanFeature
    }

    let proPlanFeature = [
        {
            "title": "Unlimited Users",
            "isAvailable": true
        },
        {
            "title": "50GB storage",
            "isAvailable": true
        },
        {
            "title": "Unlimited Public projects",
            "isAvailable": true
        },
        {
            "title": "community Access",
            "isAvailable": true
        },
        {
            "title": "Unlimite Private Projects",
            "isAvailable": true
        },
        {
            "title": "Dedicated Phone Suppport",
            "isAvailable": true
        },
        {
            "title": "Free subdomain",
            "isAvailable": true
        },
        {
            "title": "Monthly Status Reports",
            "isAvailable": true
        }];

    let proPlan = {
        "name": "PRO",
        "price": "$49/month",
        "features": proPlanFeature
    }

    let allPlans = [freePlan, plusPlan, proPlan];

    return (<div className="card_coordinator">
        {
            allPlans.map((val, index) => {
                return <SinglePriceCard key={val.name} details={val}></SinglePriceCard>
            })
        }
    </div>)
}


function SinglePriceCard({ details }) {
    return (
        <div className="card_conatiner" >
            <div className="card_header">
                <h5 className="plan_title">{details.name}</h5>
                <h5 className="price_style">{details.price}</h5>

            </div>
            <hr></hr>
            <div className="feature_conatiner">
                {
                    details.features.map((val, index) => {

                        return <SingleFeature key={index} data={val}></SingleFeature>
                    })
                }
            </div>

            <button type="button" className="btn btn-primary plan_button">START</button>

        </div>);
}

function SingleFeature({ data }) {
    return (
        <div>
            {data.isAvailable ?
                <p>&#10004; {data.title}</p> :
                <p className="feature_unavailable">&#10005; {data.title}</p>
            }
        </div>
    )
}