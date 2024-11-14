<template>
  <BaseArtistDetail>
    <template #after>
      <section>
        <HeaderSection>
          <h1>Other Doy collections</h1>
        </HeaderSection>

        <CollectionOverviewCard v-for="collection of COLLECTIONS" :key="collection.address + collection.symbol" >
          <Image v-if="collection.image" :src="collection.image" />

          <div class="text">
            <div v-if="collection.name || collection.symbol || collection.description">
              <h1 v-if="collection.name || collection.symbol">
                <span>{{ collection.name }}</span>
                <small v-if="collection.symbol">({{ collection.symbol }})</small>
              </h1>
              <p v-if="collection.description">{{ shortDescription }}</p>
            </div>

            <div v-if="collection.totalSupply" class="details">
              <p>{{ formatNumber(collection.totalSupply) }} {{ pluralize('token', collection.totalSupply) }} · Created at Block {{ collection.initBlock }}</p>
            </div>
          </div>

          <CardLink :to="collection.url">View {{ collection.name }} Collection</CardLink>
        </CollectionOverviewCard>
      </section>
    </template>
  </BaseArtistDetail>
</template>

<script setup>
import BaseArtistDetail from '@base/components/Artist/Detail.client.vue'

const COLLECTIONS = [
  {
    chain: 8453,
    address: '0x54A54dab99F63E169a5b94c1E075D9812a1AA461',
    name: 'ONLY ART',
    symbol: 'OART',
    url: 'https://opensea.io/collection/onlyart-1',
    image: 'https://i.seadn.io/s/primary-drops/0x54a54dab99f63e169a5b94c1e075d9812a1aa461/32464171:about:media:556eaa71-6d9f-4482-ba34-74249a9721fc.gif?auto=format&amp;dpr=1&amp;w=1080',
    initBlock: 15407893,
    totalSupply: 24,
  },
  {
    chain: 8453,
    address: '0x18E61EE9cf366DFEc52B9500a4018996c7723584',
    name: 'ONLY EXPECT ART ON BASE',
    symbol: 'OEAB',
    url: 'https://opensea.io/collection/only-expect-art-on-base',
    image: 'https://i.seadn.io/s/primary-drops/0x18e61ee9cf366dfec52b9500a4018996c7723584/31638371:about:media:f2165555-c7db-4e58-b878-b8cb103d7785.png?auto=format&amp;dpr=1&amp;w=1080',
    initBlock: 11927855,
    totalSupply: 2,
  },
  {
    chain: 1,
    address: '0x33332dD7e7ecf8181fA2225C818fC145680fe197',
    name: 'Ombre by Doy',
    symbol: 'OMBRE',
    url: 'https://opensea.io/collection/ombre-3',
    image: 'https://i.seadn.io/s/primary-drops/0x33332dd7e7ecf8181fa2225c818fc145680fe197/27265378:about:media:93181d2c-48b7-4728-ab03-3806070f6711.png?auto=format&amp;dpr=1&amp;w=1080',
    initBlock: 17531245,
    totalSupply: 30,
  },
  {
    chain: 1,
    address: '0xF7171295Fd06B85f1c73DaaB17df5cE3f5A190da',
    name: 'NIGHT',
    symbol: 'NIT',
    url: 'https://foundation.app/collection/nuit',
    image: 'https://f8n-production-collection-assets.imgix.net/0xF7171295Fd06B85f1c73DaaB17df5cE3f5A190da/1/nft.png?auto=format,compress&q=70&cs=srgb&h=1200&w=1200&fnd_key=v1',
    initBlock: 19143359,
    totalSupply: 5,
  },
  {
    chain: 1,
    address: '0x5A0307B991124b76F97d1Da1E68FFBea4413649C',
    name: 'Proof of worth',
    symbol: 'WORTH',
    url: 'https://foundation.app/collection/worth',
    image: 'https://f8n-production.imgix.net/collections/x13b02ra1.png?auto=format%2Ccompress&q=50&cs=srgb&w=128&h=128&fit=crop&dpr=2&fnd_key=v1&quot',
    initBlock: 17444197,
    totalSupply: 12,
  },
  {
    chain: 8453,
    address: '0xF1F991D07a4C142B550C9dCB9576B9B34083Ed58',
    name: 'Degens by Doy',
    symbol: 'DGNS',
    url: 'https://opensea.io/collection/degens-by-doy',
    image: 'https://i.seadn.io/s/primary-drops/0xf1f991d07a4c142b550c9dcb9576b9b34083ed58/31784658:about:media:77ff7d31-55d8-4e5b-aa31-0a9671652a07.png?auto=format&amp;dpr=1&amp;w=1080',
    initBlock: 12648652,
    totalSupply: 9884,
  },
  {
    chain: 8453,
    address: '0x35725166806b98B5007fef5A77A3D1b2fB330Bd4',
    name: 'Alienza by doy',
    symbol: 'AZA',
    url: 'https://opensea.io/collection/alienza-by-doy',
    image: 'https://i.seadn.io/s/primary-drops/0x35725166806b98b5007fef5a77a3d1b2fb330bd4/31576827:about:media:3b4e6086-0a37-4e6f-931a-32f9a72e34b0.png?auto=format&amp;dpr=1&amp;w=1080',
    initBlock: 11451426,
    totalSupply: 10,
  },
  {
    chain: 1,
    address: '0x517B3A2b837db1eB880df36C5c185fD65504f376',
    name: 'OPEPENISM',
    symbol: 'OPNISM',
    url: 'https://foundation.app/collection/opnism',
    image: 'https://f8n-production.imgix.net/collections/u2jd5v5al.png?auto=format%2Ccompress&q=50&cs=srgb&w=128&h=128&fit=crop&dpr=2&fnd_key=v1&quot',
    initBlock: 17949167,
    totalSupply: 45,
  },
  
]
</script>

<style scoped>
section {
  display: grid;
  gap: var(--spacer);

  @media (--md) {
    gap: var(--spacer-lg);
  }
}
</style>
