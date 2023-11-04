import { useParams } from "react-router-dom";
import "./LNAIFormsPage.css";
import { LNAIFormFillip, LNAINavBar } from "../../components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getSubscribedServices } from "../../axiosActions";

const LNAIFormsPage = () => {
  const userCredState: any = useSelector((state) => state);
  const { formType } = useParams();
  const [servicesSubscribed, setServicesSubscribed] = useState<any>({});
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  const storeUserToken = userCredState["userToken"]
    ? userCredState["userToken"]
    : {};
  const localUserToken = localStorage.getItem("x-users-tokens");

  let authToken;

  if (Object.keys(storeUserToken).length) {
    if (localUserToken !== null) authToken = localUserToken;
    else authToken = storeUserToken;
  } else if (localUserToken !== null) {
    authToken = localUserToken;
  } else {
    authToken = {};
  }

  useEffect(() => {
    const getSubscribedServicesData = async () => {
      const localStorageTokens = localStorage.getItem("x-users-tokens");

      if (localStorageTokens) {
        const parsedLocalStorageTokens = JSON.parse(localStorageTokens);
        const accessToken: string = parsedLocalStorageTokens["access_token"];
        const subscribedServicesData: any = await getSubscribedServices(
          accessToken
        );

        if (subscribedServicesData.status === 200) {
          setServicesSubscribed(subscribedServicesData.data.ServicesSubscribed);
        }
      }
    };

    getSubscribedServicesData();
  }, []);

  useEffect(() => {
    Object.keys(servicesSubscribed)?.length > 0 &&
      Object.keys(servicesSubscribed)?.map((key, index) => {
        servicesSubscribed[key].map((indService: any, serviceIndex: any) => {
          if (formType == indService) setIsAuthorized(true);
        });
      });
  }, [servicesSubscribed]);

  console.log(isAuthorized);

  return (
    <div>
      <LNAINavBar menuItems={"none"} />
      {Object.keys(authToken).length !== 0 ||
        Object.keys(authToken).length == null || <>None</>}

      {Object.keys(authToken).length > 0 &&
        formType === "fillip" &&
        isAuthorized && <LNAIFormFillip />}
    </div>
  );
};

export default LNAIFormsPage;
