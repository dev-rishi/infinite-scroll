import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import ExternalLinkIcon from '../../icons/ExternalLinkIcon'
import { category } from './TabMain'
import { debounce } from 'lodash-es'

const verticalScrollStyles = css`
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(25, 25, 25, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(25, 25, 25, 0.3);
  }
`

const TabContainerOuter = styled.div`
  height: calc(100% - 70px);
  overflow: auto;
  ${verticalScrollStyles}
`

const ImageGrid = styled.div`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-columns: auto auto auto;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-flow: column;
  border-radius: 10px;
  overflow: hidden;
`

interface IImageGridItem {
  url: string
}

const ImageGridItem = styled.div<IImageGridItem>`
  position: relative;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  height: 10rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: ${({ url }) => `url(${url})`};
`

const ImageInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 1rem;
  background-color: #a0b3b7;

  > p {
    font-size: 13px;
    margin: 0;
    color: #172123;
  }
`

const TabContainer = ({ activeCategory }: { activeCategory: category }) => {
  const [imageList, setImageList] = useState<any[]>([])
  const [isFetchingImageList, setIsFetchingImageList] = useState(false)
  const [page, setPage] = useState(1)
  const itemsPerPage = 10

  const prevActCategory = useRef(activeCategory)
  const currentScrollHeight = useRef(0)

  const fetchImages = useCallback(() => {
    if (activeCategory !== prevActCategory.current) {
      setPage(1)
      setImageList([])
      prevActCategory.current = activeCategory
      currentScrollHeight.current = 0
    } else {
      setIsFetchingImageList(true)
      fetch(
        `https://pixabay.com/api/?key=4971801-344afa0bc7e38ea454a61aeda&image_type=photo&editors_choice=true&category=${activeCategory}&page=${page}&per_page=${itemsPerPage}`,
      )
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          setImageList((d) => [...d, ...res.hits])
          setIsFetchingImageList(false)
        })
        .catch(() => {
          setIsFetchingImageList(false)
        })
    }
  }, [activeCategory, page])

  useEffect(() => {
    fetchImages()
  }, [fetchImages])

  const handleScroll = (e: any) => {
    const divElement: HTMLDivElement = e?.currentTarget
    const { scrollTop = 0, clientHeight = 0, scrollHeight = 0 } = divElement ?? {}
    const scrollPos = scrollTop + clientHeight
    // 50 -> offset to fetch the data a little bit earlier before the user reaches the end of the scroll
    const isBottom = scrollHeight - 50 < scrollPos
    if (!isFetchingImageList && isBottom && currentScrollHeight.current < scrollHeight) {
      setPage((pg) => ++pg)
      currentScrollHeight.current = scrollHeight
    }
  }

  return (
    <TabContainerOuter
      onScroll={(e) =>
        debounce((ev: any) => handleScroll(ev), 200, {
          leading: true,
          trailing: true,
        })(e)
      }
    >
      <ImageGrid>
        {imageList?.map((image: any) => (
          <ImageWrapper key={image.id}>
            <ImageGridItem url={image.previewURL}></ImageGridItem>
            <ImageInfo>
              <p>{image.user}</p>
              <ExternalLinkIcon
                color='#011138'
                onClick={() => window.open(image.pageURL, '_blank')}
              />
            </ImageInfo>
          </ImageWrapper>
        ))}
      </ImageGrid>
    </TabContainerOuter>
  )
}

export default TabContainer
