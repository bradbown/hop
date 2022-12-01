import fetch from 'isomorphic-fetch'

export async function makeRequest (network: string, chain: string, query: string, variables?: any) {
  console.log("makeRequest()")
  const url = getUrl(network, chain)
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      query,
      variables: variables || {}
    })
  })
  const jsonRes = await res.json()
  if (jsonRes.errors) {
    throw new Error(jsonRes.errors[0].message)
  }
  return jsonRes.data
}

function getUrl (network: string, chain: string) {
  if (chain === 'gnosis') {
    chain = 'xdai'
  }

  if (chain === 'ethereum') {
    chain = 'mainnet'
  }

  if (network === 'goerli') {
    if (chain === 'mainnet') {
      chain = 'goerli'
    }
    if (chain === 'polygon') {
      chain = 'mumbai'
    }
    if (chain === 'optimism') {
      chain = 'optimism-goerli'
    }
    if (chain === 'arbitrum') {
      throw new Error(`chain "${chain}" is not supported on goerli subgraphs`)
    }
    if (chain === 'xdai') {
      throw new Error(`chain "${chain}" is not supported on goerli subgraphs`)
    }

    return `https://api.thegraph.com/subgraphs/name/hop-protocol/hop-${chain}`
  }

  if (chain === 'mainnet') {
    // return 'https://gateway.thegraph.com/api/bd5bd4881b83e6c2c93d8dc80c9105ba/subgraphs/id/Cjv3tykF4wnd6m9TRmQV7weiLjizDnhyt6x2tTJB42Cy'
  }

  return `https://api.thegraph.com/subgraphs/name/hop-protocol/hop-${chain}`
}
