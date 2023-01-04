import { useQuery } from '@apollo/client'
import Avatar from '../../components/Avatar'
import Tag from '../../components/Tag'
import { GET_PROFILE_INFO } from '../../graphQL/queries'
import { timeToText } from '../../utils/Dates'
import Skeleton from 'react-loading-skeleton'
import { StyledCard } from './../../styled/components/Card.styled'
import { StyledFlexContainer } from '../../styled/layouts/FlexContainer.styled'
import { StyledContentWrapper } from './../../styled/layouts/ContentWrapper.styled'
import 'react-loading-skeleton/dist/skeleton.css'

export const Settings = () => {
  const { data } = useQuery(GET_PROFILE_INFO)

  return (
    <StyledContentWrapper style={{ paddingRight: "32px", alignItems: "center" }}>
      { 
        <StyledCard alignItems="center" gap="16px" style={{ alignItems: "flex-start", flexDirection: "column", width: "fit-content" }}>
          <StyledFlexContainer flexDirection="column" alignItems="center" gap="8px">
            
            { data?.profile ?
              <Avatar size={128} />
              :
              <Skeleton width={128} height={128} circle />
            }
            
            { data?.profile?.type ?
              <Tag variant="success" outline>{data?.profile?.type}</Tag>
              :
              <Skeleton width={100} height={32} />
            }

            <h1>{data?.profile?.fullName || <Skeleton width={250} height={28} />}</h1>
            <p>{data?.profile?.email || <Skeleton width={200} height={18} />}</p>
            
            { data?.profile?.createdAt ? 
               <p>Created at: {timeToText(data?.profile?.createdAt)}</p>
               :
               <Skeleton width={200} height={18} />
            }

            { data?.profile?.createdAt ? 
               <p>Updated at: {timeToText(data?.profile?.updatedAt)}</p>
               :
               <Skeleton width={200} height={18} />
            }

          </StyledFlexContainer>
        </StyledCard>
      }
      
    </StyledContentWrapper>
  )
}
