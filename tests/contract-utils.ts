import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  NewReport,
  NewStakeAmount,
  NewStaker,
  ReporterSlashed,
  StakeWithdrawRequested,
  StakeWithdrawn,
  ValueRemoved
} from "../generated/Contract/Contract"

export function createNewReportEvent(
  _queryId: Bytes,
  _time: BigInt,
  _value: Bytes,
  _nonce: BigInt,
  _queryData: Bytes,
  _reporter: Address
): NewReport {
  let newReportEvent = changetype<NewReport>(newMockEvent())

  newReportEvent.parameters = new Array()

  newReportEvent.parameters.push(
    new ethereum.EventParam("_queryId", ethereum.Value.fromFixedBytes(_queryId))
  )
  newReportEvent.parameters.push(
    new ethereum.EventParam("_time", ethereum.Value.fromUnsignedBigInt(_time))
  )
  newReportEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromBytes(_value))
  )
  newReportEvent.parameters.push(
    new ethereum.EventParam("_nonce", ethereum.Value.fromUnsignedBigInt(_nonce))
  )
  newReportEvent.parameters.push(
    new ethereum.EventParam("_queryData", ethereum.Value.fromBytes(_queryData))
  )
  newReportEvent.parameters.push(
    new ethereum.EventParam("_reporter", ethereum.Value.fromAddress(_reporter))
  )

  return newReportEvent
}

export function createNewStakeAmountEvent(
  _newStakeAmount: BigInt
): NewStakeAmount {
  let newStakeAmountEvent = changetype<NewStakeAmount>(newMockEvent())

  newStakeAmountEvent.parameters = new Array()

  newStakeAmountEvent.parameters.push(
    new ethereum.EventParam(
      "_newStakeAmount",
      ethereum.Value.fromUnsignedBigInt(_newStakeAmount)
    )
  )

  return newStakeAmountEvent
}

export function createNewStakerEvent(
  _staker: Address,
  _amount: BigInt
): NewStaker {
  let newStakerEvent = changetype<NewStaker>(newMockEvent())

  newStakerEvent.parameters = new Array()

  newStakerEvent.parameters.push(
    new ethereum.EventParam("_staker", ethereum.Value.fromAddress(_staker))
  )
  newStakerEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return newStakerEvent
}

export function createReporterSlashedEvent(
  _reporter: Address,
  _recipient: Address,
  _slashAmount: BigInt
): ReporterSlashed {
  let reporterSlashedEvent = changetype<ReporterSlashed>(newMockEvent())

  reporterSlashedEvent.parameters = new Array()

  reporterSlashedEvent.parameters.push(
    new ethereum.EventParam("_reporter", ethereum.Value.fromAddress(_reporter))
  )
  reporterSlashedEvent.parameters.push(
    new ethereum.EventParam(
      "_recipient",
      ethereum.Value.fromAddress(_recipient)
    )
  )
  reporterSlashedEvent.parameters.push(
    new ethereum.EventParam(
      "_slashAmount",
      ethereum.Value.fromUnsignedBigInt(_slashAmount)
    )
  )

  return reporterSlashedEvent
}

export function createStakeWithdrawRequestedEvent(
  _staker: Address,
  _amount: BigInt
): StakeWithdrawRequested {
  let stakeWithdrawRequestedEvent = changetype<StakeWithdrawRequested>(
    newMockEvent()
  )

  stakeWithdrawRequestedEvent.parameters = new Array()

  stakeWithdrawRequestedEvent.parameters.push(
    new ethereum.EventParam("_staker", ethereum.Value.fromAddress(_staker))
  )
  stakeWithdrawRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return stakeWithdrawRequestedEvent
}

export function createStakeWithdrawnEvent(_staker: Address): StakeWithdrawn {
  let stakeWithdrawnEvent = changetype<StakeWithdrawn>(newMockEvent())

  stakeWithdrawnEvent.parameters = new Array()

  stakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("_staker", ethereum.Value.fromAddress(_staker))
  )

  return stakeWithdrawnEvent
}

export function createValueRemovedEvent(
  _queryId: Bytes,
  _timestamp: BigInt
): ValueRemoved {
  let valueRemovedEvent = changetype<ValueRemoved>(newMockEvent())

  valueRemovedEvent.parameters = new Array()

  valueRemovedEvent.parameters.push(
    new ethereum.EventParam("_queryId", ethereum.Value.fromFixedBytes(_queryId))
  )
  valueRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "_timestamp",
      ethereum.Value.fromUnsignedBigInt(_timestamp)
    )
  )

  return valueRemovedEvent
}
